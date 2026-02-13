export default function Profile() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen font-display pb-32">
      <div className="max-w-md mx-auto min-h-screen flex flex-col pb-10">
        <header className="pt-12 pb-8 px-6 text-center">
          <div className="relative inline-block mb-4">
            <div className="w-28 h-28 rounded-full border-4 border-primary p-1 bg-white dark:bg-slate-800 shadow-xl overflow-hidden">
              <img
                alt="User Avatar"
                className="w-full h-full object-cover rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmyDLAB8_lD1PLjN6EIwM5RuYY3siVH62qOri5lwYEorMFzrkbPGuMtZzkX8-jeQ5YV2fPolVnCshSR-gcwup59FUnQDwvi6BEWkKAnUoc5ClPGEmh9HnZMEcHKNROyK_qqWuNj4iR2qe6rXFX8zDf016f6pmOUZ5k6hU-r6z2Bj4BMBjzNohmHla7QGdOMbw-LzMU5yzKnu4Nplu0gXJiMglNsNgDw8DceXC5kNlKZd9cD7ffART-pAQMEBqtnOyeNz7FfBsD2YU"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-4 border-background-light dark:border-background-dark flex items-center justify-center">
              <span className="material-icons-outlined text-sm">verified</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Alex Thompson</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">@lexilearner_92</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800/50 p-4 rounded-xl shadow-sm border border-primary/10">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">已掌握单词</p>
              <p className="text-2xl font-bold text-primary">1,245</p>
            </div>
            <div className="bg-white dark:bg-slate-800/50 p-4 rounded-xl shadow-sm border border-primary/10">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">当前连击</p>
              <div className="flex items-center justify-center gap-1">
                <span className="material-icons-outlined text-primary text-xl">local_fire_department</span>
                <p className="text-2xl font-bold">14 天</p>
              </div>
            </div>
          </div>
        </header>

        <section className="px-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">近期成就</h2>
            <button className="text-primary text-sm font-semibold">查看全部</button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="aspect-square bg-white dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center p-2 shadow-sm border border-slate-100 dark:border-slate-700/50">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-1">
                <span className="material-icons-outlined text-primary">emoji_events</span>
              </div>
              <span className="text-[10px] text-center font-medium leading-tight">词汇达人</span>
            </div>
            <div className="aspect-square bg-white dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center p-2 shadow-sm border border-slate-100 dark:border-slate-700/50">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-1">
                <span className="material-icons-outlined text-primary">bolt</span>
              </div>
              <span className="text-[10px] text-center font-medium leading-tight">阅读极客</span>
            </div>
            <div className="aspect-square bg-white dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center p-2 shadow-sm border border-slate-100 dark:border-slate-700/50">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-1">
                <span className="material-icons-outlined text-primary">calendar_month</span>
              </div>
              <span className="text-[10px] text-center font-medium leading-tight">7天挑战</span>
            </div>
            <div className="aspect-square bg-slate-200/50 dark:bg-slate-800/30 rounded-xl flex flex-col items-center justify-center p-2 border border-dashed border-slate-300 dark:border-slate-700">
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-1">
                <span className="material-icons-outlined text-slate-400 text-sm">lock</span>
              </div>
              <span className="text-[10px] text-center font-medium text-slate-400">未解锁</span>
            </div>
          </div>
        </section>

        <section className="px-6 space-y-3">
          <h2 className="text-lg font-bold mb-4">设置与偏好</h2>
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-primary">notifications_active</span>
              </div>
              <div>
                <p className="font-semibold text-sm">学习提醒</p>
                <p className="text-xs text-slate-400">每天早上 09:00</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative p-1">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-blue-500">cloud_download</span>
              </div>
              <div>
                <p className="font-semibold text-sm">离线词库</p>
                <p className="text-xs text-slate-400">3个离线词包可用</p>
              </div>
            </div>
            <span className="material-icons-outlined text-slate-300">chevron_right</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-orange-500">person</span>
              </div>
              <div>
                <p className="font-semibold text-sm">账户设置</p>
                <p className="text-xs text-slate-400">个人资料、隐私与安全</p>
              </div>
            </div>
            <span className="material-icons-outlined text-slate-300">chevron_right</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-500/10 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-slate-500">help_outline</span>
              </div>
              <div>
                <p className="font-semibold text-sm">帮助与支持</p>
                <p className="text-xs text-slate-400">常见问题、联系我们</p>
              </div>
            </div>
            <span className="material-icons-outlined text-slate-300">chevron_right</span>
          </div>
        </section>

        <div className="mt-auto px-6 pt-8 pb-8">
          <button className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
            <span className="material-icons-outlined">share</span>
            分享我的进度
          </button>
          <button className="w-full mt-4 text-rose-500 font-semibold py-2 text-sm">
            退出登录
          </button>
        </div>
      </div>
    </div>
  );
}
