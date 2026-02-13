import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../store/AppContext';
import { getWordById } from '../data/mockWords';

type TimeRange = 'week' | 'month' | 'quarter' | 'all';

export default function Stats() {
  const navigate = useNavigate();
  const { state, getStats } = useApp();
  const { user, learningRecords } = state;
  const stats = getStats();

  const [timeRange, setTimeRange] = useState<TimeRange>('week');

  // 获取最近学习的单词
  const recentRecords = [...learningRecords]
    .sort((a, b) => new Date(b.lastReviewAt).getTime() - new Date(a.lastReviewAt).getTime())
    .slice(0, 4)
    .map(record => ({
      record,
      word: getWordById(record.wordId)
    }))
    .filter(item => item.word);

  // 计算进度百分比
  const getProgressPercentage = (record: typeof learningRecords[0]) => {
    if (record.status === 'mastered') return 100;
    if (record.status === 'learning') {
      const total = record.correctCount + record.incorrectCount;
      if (total === 0) return 0;
      return Math.round((record.correctCount / total) * 75);
    }
    return 0;
  };

  // 时间范围标签
  const timeRangeLabels: Record<TimeRange, string> = {
    week: '本周',
    month: '本月',
    quarter: '季度',
    all: '全部'
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen font-display pb-32">
      {/* 头部 */}
      <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pt-12 pb-4 border-b border-primary/10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">数据统计</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">每周学习计划</p>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center border border-primary/10 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <span className="material-icons-round text-primary">calendar_today</span>
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-sm hover:opacity-80 transition-opacity"
            >
              <img alt="Profile" src={user.avatar} />
            </button>
          </div>
        </div>

        {/* 时间范围切换 */}
        <div className="mt-6 flex p-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-xl">
          {(['week', 'month', 'quarter', 'all'] as TimeRange[]).map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${timeRange === range
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-primary'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
            >
              {timeRangeLabels[range]}
            </button>
          ))}
        </div>
      </div>

      <main className="px-5 pt-6 space-y-8">
        {/* 掌握情况 */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm font-bold tracking-wider text-slate-400">掌握情况</h2>
            <span className="text-xs font-semibold text-primary">总词汇量 {stats.totalWords}</span>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-primary/5">
            <div className="h-8 w-full flex rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${(stats.masteredCount / stats.totalWords) * 100}%` }}
              ></div>
              <div
                className="h-full bg-learning transition-all duration-500"
                style={{ width: `${(stats.learningCount / stats.totalWords) * 100}%` }}
              ></div>
              <div
                className="h-full bg-inactive dark:bg-slate-700 transition-all duration-500"
                style={{ width: `${(stats.newCount / stats.totalWords) * 100}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">已掌握</span>
                </div>
                <p className="text-lg font-bold">{stats.masteredCount}</p>
              </div>
              <div className="text-center border-x border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-learning"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">学习中</span>
                </div>
                <p className="text-lg font-bold">{stats.learningCount}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-inactive dark:bg-slate-700"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">未开始</span>
                </div>
                <p className="text-lg font-bold">{stats.newCount}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 记忆曲线 */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold tracking-wider text-slate-400">记忆曲线</h2>
            <div className="flex items-center gap-1">
              <span className="material-icons-round text-xs text-primary">trending_up</span>
              <span className="text-[10px] font-bold text-primary">较上周 +12%</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-primary/5">
            <div className="flex justify-between items-center mb-6">
              <p className="text-xs text-slate-500 font-medium">艾宾浩斯遗忘曲线</p>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">系统预测</span>
            </div>
            <div className="relative h-40 w-full mb-4">
              <svg className="w-full h-full" viewBox="0 0 400 150">
                {/* 背景线 */}
                <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="1" x1="0" x2="400" y1="140" y2="140"></line>
                <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="400" y1="100" y2="100"></line>
                <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="400" y1="60" y2="60"></line>
                <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="400" y1="20" y2="20"></line>

                {/* 理论曲线 */}
                <path className="text-primary opacity-30" d="M0,20 C50,25 100,80 150,90 C200,100 250,115 400,120" fill="none" stroke="currentColor" strokeWidth="3"></path>

                {/* 实际曲线 */}
                <path className="text-primary" d="M0,20 C50,22 100,50 150,55 C200,60 250,70 400,75" fill="none" stroke="currentColor" strokeWidth="4"></path>

                {/* 当前点 */}
                <circle cx="150" cy="55" fill="white" r="5" stroke="#19e65e" strokeWidth="3"></circle>
              </svg>
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-1 text-[8px] font-bold text-slate-400">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 px-2">
              <span>现在</span>
              <span>1天</span>
              <span>3天</span>
              <span>1周</span>
              <span>2周</span>
              <span>1月</span>
            </div>
          </div>
        </section>

        {/* 最近学习 */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm font-bold tracking-wider text-slate-400">最近学习</h2>
            <button
              onClick={() => navigate('/learn?mode=review')}
              className="text-xs font-bold text-primary hover:underline"
            >
              查看全部
            </button>
          </div>

          {recentRecords.length > 0 ? (
            <div className="space-y-3">
              {recentRecords.map(({ record, word }) => {
                if (!word) return null;
                const progress = getProgressPercentage(record);

                return (
                  <button
                    key={record.wordId}
                    onClick={() => navigate('/learn?mode=review')}
                    className="w-full bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-primary/5 shadow-sm hover:shadow-md transition-shadow text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${record.status === 'mastered'
                          ? 'bg-primary'
                          : 'bg-primary/10'
                        }`}>
                        {record.status === 'mastered' ? (
                          <span className="text-white material-icons-round">check_circle</span>
                        ) : (
                          <span className="text-primary font-bold text-lg">{word.word[0]}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-base leading-tight">{word.word}</h3>
                        <p className="text-xs text-slate-500">{word.meaning}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {record.status === 'mastered' ? (
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                          <span className="material-icons-round text-sm">done_all</span>
                        </div>
                      ) : (
                        <div
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary -rotate-90"
                          style={{
                            borderColor: `#19e65e`,
                            borderRightColor: progress < 25 ? '#e2e8f0' : '#19e65e',
                            borderTopColor: progress < 50 ? '#e2e8f0' : '#19e65e',
                            borderLeftColor: progress < 75 ? '#e2e8f0' : '#19e65e',
                          }}
                        >
                          <span className="rotate-90 text-[10px] font-bold">{progress}%</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-primary/5 text-center">
              <span className="material-icons text-4xl text-slate-300 dark:text-slate-600 mb-2">menu_book</span>
              <p className="text-slate-500 dark:text-slate-400">还没有学习记录</p>
              <button
                onClick={() => navigate('/learn')}
                className="mt-4 text-primary font-semibold text-sm hover:underline"
              >
                开始学习
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
