import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudyPlan() {
  const navigate = useNavigate();
  const [dailyWords, setDailyWords] = useState(25);
  const [reviewIntensity, setReviewIntensity] = useState(2);

  const intensities = ['轻松', '适中', '高强度'];

  return (
    <div className="w-full max-w-[400px] mx-auto bg-white dark:bg-zinc-900 min-h-screen relative shadow-2xl flex flex-col">
      <header className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => navigate(-1)}
            className="text-primary hover:opacity-80 transition-opacity flex items-center gap-1"
          >
            <span className="material-icons text-xl">arrow_back_ios</span>
            <span className="text-sm font-medium">返回</span>
          </button>
          <button className="text-primary font-semibold text-sm">保存</button>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">学习计划</h1>
      </header>

      <main className="flex-1 px-6 pt-4 overflow-y-auto space-y-6 pb-32">
        <section>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 block">当前选择</label>
          <div className="bg-slate-50 dark:bg-zinc-800/50 rounded-xl p-4 flex items-center gap-4 border border-slate-100 dark:border-zinc-800 shadow-sm">
            <div className="w-20 h-28 bg-primary/10 rounded-lg overflow-hidden flex-shrink-0 shadow-inner">
              <img
                alt="书本封面"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1W8D_6IKSTo8dnZgBjjUT86fFvZxFcJT_q1P7A-Yo4YNTgNNd8nKcoFuJ0OOJ3sZeuiAy27_XbV1gY-fewrKlmB7-UjGCM7et5o_ZR_5zb2qJXnA9d1aRuP48k7U_Krnt66BfJu45RLl8EDZkWkyAoB0GFNcR9kzW9PjfSDmHMZX3HSJ-vpGRIdZ0h8UmUQmJZuQo4cHJhm0PoYYkZ3chB_B6cWrFZ79GjZtDEXYkyanB7c1V5TjIV9J7p7aHMJjAxizXtGZ_IFX0"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">雅思核心词汇</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">总计 1,200 词</p>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">进行中</span>
              </div>
            </div>
          </div>
          <button className="w-full mt-3 py-3 rounded-xl border-2 border-primary/10 text-primary font-semibold text-sm hover:bg-primary/5 transition-colors">
            更换词书
          </button>
        </section>

        <section className="space-y-8">
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="block">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">每日新词</span>
                <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5">专注新内容学习</span>
              </label>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-lg font-bold">
                {dailyWords}
              </div>
            </div>
            <div className="relative flex items-center">
              <input
                className="w-full h-1.5 appearance-none bg-slate-100 dark:bg-zinc-800 rounded-full cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
                max="100"
                min="5"
                type="range"
                value={dailyWords}
                onChange={(e) => setDailyWords(Number(e.target.value))}
              />
            </div>
            <div className="flex justify-between mt-2 px-1">
              <span className="text-[10px] text-slate-400 font-medium">5</span>
              <span className="text-[10px] text-slate-400 font-medium">100</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="block">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">复习强度</span>
                <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5">间隔复习频率</span>
              </label>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">{intensities[reviewIntensity - 1]}</span>
            </div>
            <div className="relative flex items-center">
              <input
                className="w-full h-1.5 appearance-none bg-slate-100 dark:bg-zinc-800 rounded-full cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg"
                max="3"
                min="1"
                type="range"
                value={reviewIntensity}
                onChange={(e) => setReviewIntensity(Number(e.target.value))}
              />
            </div>
            <div className="flex justify-between mt-2 px-1">
              <span className="text-[10px] text-slate-400 font-medium">轻松</span>
              <span className="text-[10px] text-slate-400 font-medium">高强度</span>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 dark:bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest mb-2">预计完成时间</p>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            2024年11月14日
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-primary">
            <span className="material-icons text-sm">schedule</span>
            <span className="text-xs font-semibold">预计还需 48 天</span>
          </div>
        </section>
      </main>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white dark:from-zinc-900 via-white dark:via-zinc-900 to-transparent pt-12">
        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition-all">
          更新我的计划
        </button>
        <div className="mt-6 w-32 h-1 bg-slate-200 dark:bg-zinc-700 rounded-full mx-auto"></div>
      </div>
    </div>
  );
}
