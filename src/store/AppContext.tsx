import { createContext, useContext, useReducer, useEffect, useCallback, type ReactNode } from 'react';
import type { AppState, AppAction, Word, LearningRecord } from './types';
import { loadState, saveState, isNewDay, getTodayString } from '../utils/storage';
import { getRandomWords, getWordById } from '../data/mockWords';

// 初始状态
const initialState: AppState = loadState();

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
    switch (action.type) {
        case 'LOAD_STATE': {
            return { ...state, ...action.payload };
        }

        case 'MARK_WORD': {
            const { wordId, status } = action.payload;
            const now = new Date().toISOString();

            // 计算下次复习时间
            const nextReview = new Date();
            const intensityDays = state.settings.reviewIntensity;
            if (status === 'forgot') {
                nextReview.setHours(nextReview.getHours() + 4); // 4小时后复习
            } else if (status === 'uncertain') {
                nextReview.setDate(nextReview.getDate() + 1); // 1天后复习
            } else {
                nextReview.setDate(nextReview.getDate() + intensityDays * 2); // 根据强度复习
            }

            const existingIndex = state.learningRecords.findIndex(r => r.wordId === wordId);
            let newRecords = [...state.learningRecords];

            if (existingIndex >= 0) {
                const existing = newRecords[existingIndex];
                newRecords[existingIndex] = {
                    ...existing,
                    status: status === 'forgot' ? 'learning' : status === 'uncertain' ? 'learning' : 'mastered',
                    lastReviewAt: now,
                    nextReviewAt: nextReview.toISOString(),
                    correctCount: status === 'known' ? existing.correctCount + 1 : existing.correctCount,
                    incorrectCount: status === 'forgot' ? existing.incorrectCount + 1 : existing.incorrectCount,
                };
            } else {
                const newRecord: LearningRecord = {
                    wordId,
                    status: status === 'forgot' ? 'learning' : status === 'uncertain' ? 'learning' : 'mastered',
                    lastReviewAt: now,
                    nextReviewAt: nextReview.toISOString(),
                    correctCount: status === 'known' ? 1 : 0,
                    incorrectCount: status === 'forgot' ? 1 : 0,
                };
                newRecords.push(newRecord);
            }

            // 更新今日学习数
            const newTodayLearned = state.todayLearned + 1;

            return {
                ...state,
                learningRecords: newRecords,
                todayLearned: newTodayLearned,
                user: {
                    ...state.user,
                    totalMastered: newRecords.filter(r => r.status === 'mastered').length,
                }
            };
        }

        case 'UPDATE_SETTINGS': {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    ...action.payload
                }
            };
        }

        case 'START_SESSION': {
            return {
                ...state,
                currentSession: {
                    words: action.payload.words,
                    currentIndex: 0,
                    mode: action.payload.mode
                }
            };
        }

        case 'NEXT_WORD': {
            if (!state.currentSession) return state;
            return {
                ...state,
                currentSession: {
                    ...state.currentSession,
                    currentIndex: state.currentSession.currentIndex + 1
                }
            };
        }

        case 'END_SESSION': {
            return {
                ...state,
                currentSession: null
            };
        }

        case 'UPDATE_STREAK': {
            const today = getTodayString();
            const lastActive = state.user.lastActiveDate;

            let newStreak = state.user.streak;
            if (isNewDay(lastActive)) {
                const lastDate = new Date(lastActive);
                const todayDate = new Date(today);
                const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

                if (diffDays === 1) {
                    newStreak = state.user.streak + 1;
                } else if (diffDays > 1) {
                    newStreak = 1;
                }
            }

            return {
                ...state,
                user: {
                    ...state.user,
                    streak: newStreak,
                    lastActiveDate: today
                }
            };
        }

        case 'RESET_TODAY': {
            return {
                ...state,
                todayLearned: 0,
                todayNewWords: 0,
                todayReviewWords: 0
            };
        }

        default:
            return state;
    }
}

// Context
interface AppContextType {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
    // 便捷方法
    startLearning: (mode: 'new' | 'review' | 'mixed') => void;
    getCurrentWord: () => Word | null;
    markWord: (status: 'forgot' | 'uncertain' | 'known') => void;
    nextWord: () => void;
    endSession: () => void;
    updateSettings: (settings: Partial<AppState['settings']>) => void;
    getStats: () => {
        masteredCount: number;
        learningCount: number;
        newCount: number;
        totalWords: number;
    };
    speak: (text: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // 持久化状态
    useEffect(() => {
        saveState(state);
    }, [state]);

    // 检查新的一天
    useEffect(() => {
        if (isNewDay(state.user.lastActiveDate)) {
            dispatch({ type: 'UPDATE_STREAK' });
            dispatch({ type: 'RESET_TODAY' });
        }
    }, []);

    // 开始学习会话
    const startLearning = useCallback((mode: 'new' | 'review' | 'mixed') => {
        let words: Word[] = [];
        const learnedIds = state.learningRecords.map(r => r.wordId);

        if (mode === 'new') {
            // 获取未学过的单词
            words = getRandomWords(state.settings.dailyTarget, learnedIds);
        } else if (mode === 'review') {
            // 获取需要复习的单词
            const now = new Date();
            const reviewIds = state.learningRecords
                .filter(r => r.status !== 'mastered' || new Date(r.nextReviewAt) <= now)
                .map(r => r.wordId);
            words = reviewIds
                .map(id => getWordById(id))
                .filter((w): w is Word => w !== undefined)
                .slice(0, state.settings.dailyTarget);

            // 如果复习单词不够，补充新词
            if (words.length < state.settings.dailyTarget) {
                const newWords = getRandomWords(
                    state.settings.dailyTarget - words.length,
                    [...learnedIds, ...words.map(w => w.id)]
                );
                words = [...words, ...newWords];
            }
        } else {
            // 混合模式
            const reviewCount = Math.floor(state.settings.dailyTarget * 0.4);
            const newCount = state.settings.dailyTarget - reviewCount;

            const now = new Date();
            const reviewIds = state.learningRecords
                .filter(r => r.status !== 'mastered' || new Date(r.nextReviewAt) <= now)
                .map(r => r.wordId);
            const reviewWords = reviewIds
                .map(id => getWordById(id))
                .filter((w): w is Word => w !== undefined)
                .slice(0, reviewCount);

            const newWords = getRandomWords(newCount, learnedIds);
            words = [...reviewWords, ...newWords];
        }

        dispatch({ type: 'START_SESSION', payload: { words, mode } });
    }, [state.learningRecords, state.settings.dailyTarget]);

    // 获取当前单词
    const getCurrentWord = useCallback((): Word | null => {
        if (!state.currentSession) return null;
        const { words, currentIndex } = state.currentSession;
        if (currentIndex >= words.length) return null;
        return words[currentIndex];
    }, [state.currentSession]);

    // 标记单词
    const markWord = useCallback((status: 'forgot' | 'uncertain' | 'known') => {
        const word = getCurrentWord();
        if (!word) return;
        dispatch({ type: 'MARK_WORD', payload: { wordId: word.id, status } });
    }, [getCurrentWord]);

    // 下一个单词
    const nextWord = useCallback(() => {
        dispatch({ type: 'NEXT_WORD' });
    }, []);

    // 结束会话
    const endSession = useCallback(() => {
        dispatch({ type: 'END_SESSION' });
    }, []);

    // 更新设置
    const updateSettings = useCallback((settings: Partial<AppState['settings']>) => {
        dispatch({ type: 'UPDATE_SETTINGS', payload: settings });
    }, []);

    // 获取统计数据
    const getStats = useCallback(() => {
        const masteredCount = state.learningRecords.filter(r => r.status === 'mastered').length;
        const learningCount = state.learningRecords.filter(r => r.status === 'learning').length;
        const totalWords = 30; // 模拟词库总数
        const newCount = totalWords - masteredCount - learningCount;

        return { masteredCount, learningCount, newCount, totalWords };
    }, [state.learningRecords]);

    // TTS 发音
    const speak = useCallback((text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    return (
        <AppContext.Provider value={{
            state,
            dispatch,
            startLearning,
            getCurrentWord,
            markWord,
            nextWord,
            endSession,
            updateSettings,
            getStats,
            speak
        }}>
            {children}
        </AppContext.Provider>
    );
}

// Hook
export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
