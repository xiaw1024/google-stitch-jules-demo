import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '../store/AppContext';

export default function WordCard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = (searchParams.get('mode') as 'new' | 'review' | 'mixed') || 'mixed';

  const {
    state,
    startLearning,
    getCurrentWord,
    markWord,
    nextWord,
    endSession,
    speak
  } = useApp();

  const [showMeaning, setShowMeaning] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // 初始化学习会话
  useEffect(() => {
    if (!state.currentSession) {
      startLearning(mode);
    }
  }, [state.currentSession, startLearning, mode]);

  const currentWord = getCurrentWord();
  const totalWords = state.currentSession?.words.length || 0;
  const currentIndex = state.currentSession?.currentIndex || 0;
  const progress = totalWords > 0 ? ((currentIndex + 1) / totalWords) * 100 : 0;

  // 处理标记单词
  const handleMark = (status: 'forgot' | 'uncertain' | 'known') => {
    if (!currentWord || isAnimating) return;

    setIsAnimating(true);
    markWord(status);

    // 延迟切换到下一个单词
    setTimeout(() => {
      setShowMeaning(false);
      nextWord();
      setIsAnimating(false);
    }, 300);
  };

  // 发音
  const handleSpeak = () => {
    if (currentWord) {
      speak(currentWord.word);
    }
  };

  // 关闭学习
  const handleClose = () => {
    endSession();
    navigate(-1);
  };

  // 学习完成
  const isComplete = state.currentSession && currentIndex >= totalWords;

  if (isComplete) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-display">
        <header className="px-6 pt-12 pb-4 flex items-center justify-between">
          <button
            onClick={handleClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-300/50 transition-colors"
          >
            <span className="material-icons">close</span>
          </button>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <span className="material-icons text-primary text-5xl">celebration</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">学习完成！</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            今日已学习 {state.todayLearned} 个单词
          </p>

          <div className="grid grid-cols-3 gap-4 w-full max-w-sm mb-8">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-primary">{totalWords}</p>
              <p className="text-xs text-slate-500">已学习</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-uncertain-yellow">
                {state.learningRecords.filter(r => r.status === 'learning').length}
              </p>
              <p className="text-xs text-slate-500">待复习</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-primary">
                {state.learningRecords.filter(r => r.status === 'mastered').length}
              </p>
              <p className="text-xs text-slate-500">已掌握</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-full max-w-sm bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
          >
            返回首页
          </button>
        </main>
      </div>
    );
  }

  if (!currentWord) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-display">
      <header className="px-6 pt-12 pb-4 flex items-center justify-between">
        <button
          onClick={handleClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-300/50 transition-colors"
        >
          <span className="material-icons">close</span>
        </button>
        <div className="flex-1 px-8">
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="text-sm font-medium text-slate-500">
          {currentIndex + 1}/{totalWords}
        </div>
      </header>

      <main className={`flex-1 flex flex-col px-6 py-4 justify-center transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 flex flex-col items-center text-center min-h-[420px]">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {currentWord.word}
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="text-lg text-slate-400 font-light">{currentWord.phonetic}</span>
              <button
                onClick={handleSpeak}
                className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <span className="material-icons text-lg">volume_up</span>
              </button>
            </div>
          </div>

          <div className="w-full flex-1 flex flex-col items-center justify-center">
            <div className="space-y-6 w-full">
              <div className="h-px w-12 bg-slate-200 dark:bg-slate-800 mx-auto"></div>

              {!showMeaning ? (
                <button
                  onClick={() => setShowMeaning(true)}
                  className="w-full py-4 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                >
                  <span className="material-icons text-3xl mb-2">touch_app</span>
                  <p className="text-sm">点击显示释义</p>
                </button>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-2xl text-slate-700 dark:text-slate-300 font-semibold">
                    {currentWord.meaning}
                  </p>
                  <div className="p-4 rounded-lg bg-background-light dark:bg-slate-800/50 italic text-slate-500 dark:text-slate-400">
                    "{currentWord.example}"
                    <span className="block not-italic text-sm mt-2 text-slate-400">
                      {currentWord.exampleTranslation}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 w-full flex justify-center gap-2">
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-full uppercase tracking-wider">
              {currentWord.partOfSpeech}
            </span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-full uppercase tracking-wider">
              {currentWord.category}
            </span>
          </div>
        </div>
      </main>

      <footer className="px-6 pt-4 pb-12 grid grid-cols-3 gap-4">
        <button
          onClick={() => handleMark('forgot')}
          disabled={!showMeaning || isAnimating}
          className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all ${showMeaning && !isAnimating
              ? 'bg-forgot-red/10 border border-forgot-red/20 active:scale-95 hover:bg-forgot-red/20'
              : 'bg-slate-100 dark:bg-slate-800 opacity-50 cursor-not-allowed'
            }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${showMeaning && !isAnimating
              ? 'bg-forgot-red text-white shadow-forgot-red/30'
              : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
            }`}>
            <span className="material-icons">sentiment_very_dissatisfied</span>
          </div>
          <span className={`text-sm font-bold tracking-tight ${showMeaning && !isAnimating ? 'text-forgot-red' : 'text-slate-400'
            }`}>忘记</span>
        </button>
        <button
          onClick={() => handleMark('uncertain')}
          disabled={!showMeaning || isAnimating}
          className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all ${showMeaning && !isAnimating
              ? 'bg-uncertain-yellow/10 border border-uncertain-yellow/20 active:scale-95 hover:bg-uncertain-yellow/20'
              : 'bg-slate-100 dark:bg-slate-800 opacity-50 cursor-not-allowed'
            }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${showMeaning && !isAnimating
              ? 'bg-uncertain-yellow text-white shadow-uncertain-yellow/30'
              : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
            }`}>
            <span className="material-icons">sentiment_neutral</span>
          </div>
          <span className={`text-sm font-bold tracking-tight ${showMeaning && !isAnimating ? 'text-uncertain-yellow' : 'text-slate-400'
            }`}>不确定</span>
        </button>
        <button
          onClick={() => handleMark('known')}
          disabled={!showMeaning || isAnimating}
          className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all ${showMeaning && !isAnimating
              ? 'bg-primary/10 border border-primary/20 active:scale-95 hover:bg-primary/20'
              : 'bg-slate-100 dark:bg-slate-800 opacity-50 cursor-not-allowed'
            }`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${showMeaning && !isAnimating
              ? 'bg-primary text-white shadow-primary/30'
              : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
            }`}>
            <span className="material-icons">sentiment_very_satisfied</span>
          </div>
          <span className={`text-sm font-bold tracking-tight ${showMeaning && !isAnimating ? 'text-primary' : 'text-slate-400'
            }`}>认识</span>
        </button>
      </footer>
    </div>
  );
}
