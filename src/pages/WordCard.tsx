import { useNavigate } from 'react-router-dom';

export default function WordCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-display">
      <header className="px-6 pt-12 pb-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-300/50 transition-colors"
        >
          <span className="material-icons">close</span>
        </button>
        <div className="flex-1 px-8">
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3 rounded-full"></div>
          </div>
        </div>
        <div className="text-sm font-medium text-slate-500">
          24/36
        </div>
      </header>

      <main className="flex-1 flex flex-col px-6 py-4 justify-center">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 flex flex-col items-center text-center min-h-[420px]">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              Ephemeral
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="text-lg text-slate-400 font-light">/əˈfemərəl/</span>
              <button className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors">
                <span className="material-icons text-lg">volume_up</span>
              </button>
            </div>
          </div>

          <div className="w-full flex-1 flex flex-col items-center justify-center">
            <div className="space-y-6 w-full">
              <div className="h-px w-12 bg-slate-200 dark:bg-slate-800 mx-auto"></div>
              <div className="space-y-4">
                <p className="text-2xl text-slate-700 dark:text-slate-300 font-semibold">
                  转瞬即逝的，短暂的
                </p>
                <div className="p-4 rounded-lg bg-background-light dark:bg-slate-800/50 italic text-slate-500 dark:text-slate-400">
                  "Life is <span className="text-primary font-semibold not-italic">ephemeral</span>, but art is eternal."
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 w-full flex justify-center gap-2">
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-full uppercase tracking-wider">形容词</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-full uppercase tracking-wider">学术词汇</span>
          </div>
        </div>
      </main>

      <footer className="px-6 pt-4 pb-12 grid grid-cols-3 gap-4">
        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-forgot-red/10 border border-forgot-red/20 active:scale-95 hover:bg-forgot-red/20 transition-all">
          <div className="w-12 h-12 rounded-full bg-forgot-red text-white flex items-center justify-center shadow-lg shadow-forgot-red/30">
            <span className="material-icons">sentiment_very_dissatisfied</span>
          </div>
          <span className="text-sm font-bold text-forgot-red tracking-tight">忘记</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-uncertain-yellow/10 border border-uncertain-yellow/20 active:scale-95 hover:bg-uncertain-yellow/20 transition-all">
          <div className="w-12 h-12 rounded-full bg-uncertain-yellow text-white flex items-center justify-center shadow-lg shadow-uncertain-yellow/30">
            <span className="material-icons">sentiment_neutral</span>
          </div>
          <span className="text-sm font-bold text-uncertain-yellow tracking-tight">不确定</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary/10 border border-primary/20 active:scale-95 hover:bg-primary/20 transition-all">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="material-icons">sentiment_very_satisfied</span>
          </div>
          <span className="text-sm font-bold text-primary tracking-tight">认识</span>
        </button>
      </footer>
    </div>
  );
}
