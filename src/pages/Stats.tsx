export default function Stats() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen font-display pb-32">
      <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pt-12 pb-4 border-b border-primary/10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">数据统计</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">每周学习计划</p>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center border border-primary/10">
              <span className="material-icons-round text-primary">calendar_today</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-sm">
              <img alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn-Wpd4OHRRC77cdGzZ8kzrr9Ovy2AuvG-tajqQVUWwbnn4Zp-jKiKA1UPWunGZK6nDimCjVM-1T_2VtrrHfrTUAniaHH-eNn4Sft5T9COSPqle50UP0UVwyAb_T9XapTTAS_SCHogFG4I2Xnf5tjAXHMvk4Li0EOUMSXDPJ2nmO3S_TuuOqOgQt20CjYmK0pGU_X-jZ9nn1a9i4KstXvD7RZk0XXuw-vFrAkagLeut-a1Nuvcx8muVeLJsuByDQNyf1KTPGoO7ozv" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex p-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-xl">
          <button className="flex-1 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-700 shadow-sm text-primary">本周</button>
          <button className="flex-1 py-1.5 text-xs font-semibold rounded-lg text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">本月</button>
          <button className="flex-1 py-1.5 text-xs font-semibold rounded-lg text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">季度</button>
          <button className="flex-1 py-1.5 text-xs font-semibold rounded-lg text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">全部</button>
        </div>
      </div>

      <main className="px-5 pt-6 space-y-8">
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm font-bold tracking-wider text-slate-400">掌握情况</h2>
            <span className="text-xs font-semibold text-primary">总词汇量 2,450</span>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-primary/5">
            <div className="h-8 w-full flex rounded-full overflow-hidden mb-6">
              <div className="h-full bg-primary" style={{ width: '45%' }}></div>
              <div className="h-full bg-learning" style={{ width: '30%' }}></div>
              <div className="h-full bg-inactive dark:bg-slate-700" style={{ width: '25%' }}></div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">已掌握</span>
                </div>
                <p className="text-lg font-bold">1,102</p>
              </div>
              <div className="text-center border-x border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-learning"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">学习中</span>
                </div>
                <p className="text-lg font-bold">735</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-inactive dark:bg-slate-700"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">未开始</span>
                </div>
                <p className="text-lg font-bold">613</p>
              </div>
            </div>
          </div>
        </section>

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
                <path className="text-primary opacity-30" d="M0,20 C50,25 100,80 150,90 C200,100 250,115 400,120" fill="none" stroke="currentColor" strokeWidth="3"></path>
                <path className="text-primary" d="M0,20 C50,22 100,50 150,55 C200,60 250,70 400,75" fill="none" stroke="currentColor" strokeWidth="4"></path>
                <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="1" x1="0" x2="400" y1="140" y2="140"></line>
                <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="400" y1="100" y2="100"></line>
                <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="400" y1="60" y2="60"></line>
                <line className="text-slate-100 dark:text-slate-800" stroke="currentColor" strokeDasharray="4" x1="0" x2="400" y1="20" y2="20"></line>
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

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm font-bold tracking-wider text-slate-400">最近学习</h2>
            <button className="text-xs font-bold text-primary">查看全部</button>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-primary/5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">E</span>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Ephemeral</h3>
                  <p className="text-xs text-slate-500">短暂的；生命极短的。</p>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary border-t-inactive dark:border-t-slate-700 -rotate-90">
                  <span className="rotate-90 text-[10px] font-bold">75%</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-primary/5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-learning/10 rounded-xl flex items-center justify-center">
                  <span className="text-learning font-bold text-lg">P</span>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Pragmatic</h3>
                  <p className="text-xs text-slate-500">务实的；实事求是的。</p>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-learning border-t-inactive dark:border-t-slate-700 -rotate-90">
                  <span className="rotate-90 text-[10px] font-bold">42%</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-primary/5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white material-icons-round">check_circle</span>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Resilience</h3>
                  <p className="text-xs text-slate-500">恢复力；韧性。</p>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                  <span className="material-icons-round text-sm">done_all</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex items-center justify-between border border-primary/5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-learning/10 rounded-xl flex items-center justify-center">
                  <span className="text-learning font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Sagacity</h3>
                  <p className="text-xs text-slate-500">睿智；聪敏。</p>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-learning border-r-inactive dark:border-r-slate-700 -rotate-90">
                  <span className="rotate-90 text-[10px] font-bold">18%</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
