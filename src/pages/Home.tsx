import { useNavigate } from 'react-router-dom';
import { useApp } from '../store/AppContext';
import { formatDateDisplay } from '../utils/storage';

export default function Home() {
  const navigate = useNavigate();
  const { state, getStats } = useApp();
  const { user, settings, todayLearned, todayNewWords, todayReviewWords } = state;
  const stats = getStats();

  // 计算进度
  const progress = settings.dailyTarget > 0
    ? Math.min((todayLearned / settings.dailyTarget) * 100, 100)
    : 0;
  const progressOffset = 502.6 - (502.6 * progress / 100);

  // 获取当前日期
  const today = new Date();
  const dateDisplay = formatDateDisplay(today.toISOString());

  // 生成打卡日历数据
  const weekDays = ['一', '二', '三', '四', '五', '六', '日'];
  const currentDayOfWeek = today.getDay(); // 0 = 周日
  const adjustedDay = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1; // 转换为周一=0

  return (
    <div className="flex flex-col h-full relative">
      <header className="px-6 py-4 flex justify-between items-center">
        <div>
          <p className="text-xs font-medium text-emerald-600/70 dark:text-primary/70 uppercase tracking-widest">
            {dateDisplay}
          </p>
          <h1 className="text-2xl font-bold">你好, {user.name}! 👋</h1>
        </div>
        <button
          onClick={() => navigate('/profile')}
          className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary hover:opacity-80 transition-opacity"
        >
          <img
            alt="Profile"
            src={user.avatar}
          />
        </button>
      </header>

      <main className="px-6 space-y-6 overflow-y-auto pb-32">
        {/* 今日目标进度环 */}
        <button
          onClick={() => navigate('/learn')}
          className="w-full bg-emerald-50 dark:bg-primary/5 p-6 rounded-xl flex flex-col items-center justify-center border border-emerald-100 dark:border-primary/10 hover:bg-emerald-100 dark:hover:bg-primary/10 transition-colors"
        >
          <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200 mb-4">今日目标</p>
          <div className="relative flex items-center justify-center">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle
                className="text-emerald-100 dark:text-emerald-900/30"
                cx="96" cy="96" fill="transparent" r="80"
                stroke="currentColor" strokeWidth="12"
              ></circle>
              <circle
                className="text-primary transition-all duration-500"
                cx="96" cy="96" fill="transparent" r="80"
                stroke="currentColor"
                strokeDasharray="502.6"
                strokeDashoffset={progressOffset}
                strokeLinecap="round" strokeWidth="12"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">{todayLearned}/{settings.dailyTarget}</span>
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">已学单词</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="material-icons text-primary text-sm">bolt</span>
            <p className="text-xs text-emerald-700 dark:text-emerald-300">
              {todayLearned >= settings.dailyTarget
                ? '🎉 恭喜！今日目标已达成！'
                : `加油！再学 ${settings.dailyTarget - todayLearned} 个词就达标了。`
              }
            </p>
          </div>
        </button>

        {/* 新词/复习卡片 */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/learn?mode=new')}
            className="bg-white dark:bg-emerald-900/20 p-4 rounded-xl shadow-sm border border-emerald-50 dark:border-primary/5 hover:shadow-md transition-shadow text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-primary/20 flex items-center justify-center mb-3">
              <span className="material-icons text-primary text-lg">star_outline</span>
            </div>
            <p className="text-2xl font-bold">{todayNewWords}</p>
            <p className="text-xs text-emerald-600/70 dark:text-emerald-400 font-medium">新词</p>
          </button>
          <button
            onClick={() => navigate('/learn?mode=review')}
            className="bg-white dark:bg-emerald-900/20 p-4 rounded-xl shadow-sm border border-emerald-50 dark:border-primary/5 hover:shadow-md transition-shadow text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-primary/20 flex items-center justify-center mb-3">
              <span className="material-icons text-primary text-lg">history_edu</span>
            </div>
            <p className="text-2xl font-bold">{todayReviewWords}</p>
            <p className="text-xs text-emerald-600/70 dark:text-emerald-400 font-medium">复习</p>
          </button>
        </div>

        {/* 连续打卡 */}
        <section className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold">连续打卡</h2>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
              已连续 {user.streak} 天！🔥
            </span>
          </div>
          <div className="flex justify-between bg-white dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-50 dark:border-primary/5">
            {weekDays.map((day, index) => {
              const isPast = index < adjustedDay;
              const isToday = index === adjustedDay;
              const isChecked = isPast || (isToday && todayLearned > 0);

              return (
                <div key={day} className="flex flex-col items-center gap-2">
                  <span className={`text-[10px] font-bold ${isToday ? 'text-primary' : isPast ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {day}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isChecked
                    ? 'bg-primary text-white'
                    : isToday
                      ? 'bg-primary/20 border-2 border-primary text-primary'
                      : 'bg-emerald-100 dark:bg-emerald-800 opacity-30'
                    }`}>
                    {isChecked ? (
                      <span className="material-icons text-sm">check</span>
                    ) : (
                      <span className="text-xs font-bold">{today.getDate() - adjustedDay + index}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 学习统计概览 */}
        <section className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold">词汇掌握</h2>
            <button
              onClick={() => navigate('/stats')}
              className="text-xs font-bold text-primary hover:underline"
            >
              查看详情
            </button>
          </div>
          <div className="bg-white dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-50 dark:border-primary/5">
            <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-3">
              <div className="h-full flex">
                <div
                  className="bg-primary"
                  style={{ width: `${(stats.masteredCount / stats.totalWords) * 100}%` }}
                ></div>
                <div
                  className="bg-learning"
                  style={{ width: `${(stats.learningCount / stats.totalWords) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-slate-500">已掌握 {stats.masteredCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-learning"></span>
                <span className="text-slate-500">学习中 {stats.learningCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span className="text-slate-500">未开始 {stats.newCount}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 开始学习按钮 */}
        <div className="w-full pt-4">
          <button
            onClick={() => navigate('/learn')}
            className="w-full bg-primary text-emerald-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
          >
            <span className="material-icons">play_circle</span>
            开始学习
          </button>
        </div>
      </main>
    </div>
  );
}
