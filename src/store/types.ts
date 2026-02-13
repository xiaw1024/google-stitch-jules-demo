// 单词数据结构
export interface Word {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  partOfSpeech: string;
  category: string;
}

// 学习记录
export interface LearningRecord {
  wordId: string;
  status: 'new' | 'learning' | 'mastered';
  lastReviewAt: string; // ISO date string
  nextReviewAt: string;
  correctCount: number;
  incorrectCount: number;
}

// 词书
export interface WordBook {
  id: string;
  name: string;
  description: string;
  totalWords: number;
  cover: string;
}

// 用户设置
export interface UserSettings {
  dailyTarget: number;
  reviewIntensity: 1 | 2 | 3; // 1: 轻松, 2: 适中, 3: 高强度
  currentBookId: string;
  notificationsEnabled: boolean;
  reminderTime: string;
}

// 用户数据
export interface UserData {
  name: string;
  avatar: string;
  streak: number;
  totalMastered: number;
  lastActiveDate: string;
}

// 应用状态
export interface AppState {
  // 用户信息
  user: UserData;
  
  // 设置
  settings: UserSettings;
  
  // 学习数据
  learningRecords: LearningRecord[];
  todayLearned: number;
  todayNewWords: number;
  todayReviewWords: number;
  
  // 当前学习会话
  currentSession: {
    words: Word[];
    currentIndex: number;
    mode: 'new' | 'review' | 'mixed';
  } | null;
}

// 操作类型
export type AppAction =
  | { type: 'MARK_WORD'; payload: { wordId: string; status: 'forgot' | 'uncertain' | 'known' } }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<UserSettings> }
  | { type: 'START_SESSION'; payload: { words: Word[]; mode: 'new' | 'review' | 'mixed' } }
  | { type: 'NEXT_WORD' }
  | { type: 'END_SESSION' }
  | { type: 'UPDATE_STREAK' }
  | { type: 'RESET_TODAY' }
  | { type: 'LOAD_STATE'; payload: Partial<AppState> };

// 统计数据
export interface StatsData {
  totalWords: number;
  masteredCount: number;
  learningCount: number;
  newCount: number;
  weeklyProgress: number[];
  recentWords: Array<{
    word: Word;
    record: LearningRecord;
  }>;
}

// 成就
export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: string;
}
