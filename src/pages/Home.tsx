import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full relative">
      <div className="h-11 w-full flex justify-between items-center px-8 pt-4">
        <span className="text-xs font-bold">9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="material-icons text-sm">signal_cellular_alt</span>
          <span className="material-icons text-sm">wifi</span>
          <span className="material-icons text-sm">battery_full</span>
        </div>
      </div>

      <header className="px-6 py-4 flex justify-between items-center">
        <div>
          <p className="text-xs font-medium text-emerald-600/70 dark:text-primary/70 uppercase tracking-widest">10月24日 星期一</p>
          <h1 className="text-2xl font-bold">你好, Alex! 👋</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary">
          <img
            alt="Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKjfeSGjaiSKklkUuNfXeNS3iy_NIR-sVEH-IaUfivdS4mPy4OmPVIGbWBEQgi9n1nuGu8yc4PmjqDBP5dcG1LTd7SUVUgvKtRfFRR1-_X6m3oS2A8zY6A-JtPhUP3-uYZw0eIVaw39BTBayhWsb5jjFCrogcbKpSxLOQbih_lv0W3tKhleroVX9WU3EZsnyIANu05-fDlp-S6mhSh2HPB2chMpqOnypRSAp4wRpwV_hgV_EWpLcfdsLn2Zn47tAv--eaSoOVpJeEL"
          />
        </div>
      </header>

      <main className="px-6 space-y-6 overflow-y-auto pb-32">
        <div className="bg-emerald-50 dark:bg-primary/5 p-6 rounded-xl flex flex-col items-center justify-center border border-emerald-100 dark:border-primary/10">
          <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200 mb-4">今日目标</p>
          <div className="relative flex items-center justify-center">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle className="text-emerald-100 dark:text-emerald-900/30" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-primary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502.6" strokeDashoffset="301.5" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">20/50</span>
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">已学单词</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="material-icons text-primary text-sm">bolt</span>
            <p className="text-xs text-emerald-700 dark:text-emerald-300">加油！再学 30 个词就达标了。</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-emerald-900/20 p-4 rounded-xl shadow-sm border border-emerald-50 dark:border-primary/5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-primary/20 flex items-center justify-center mb-3">
              <span className="material-icons text-primary text-lg">star_outline</span>
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-emerald-600/70 dark:text-emerald-400 font-medium">新词</p>
          </div>
          <div className="bg-white dark:bg-emerald-900/20 p-4 rounded-xl shadow-sm border border-emerald-50 dark:border-primary/5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-primary/20 flex items-center justify-center mb-3">
              <span className="material-icons text-primary text-lg">history_edu</span>
            </div>
            <p className="text-2xl font-bold">38</p>
            <p className="text-xs text-emerald-600/70 dark:text-emerald-400 font-medium">复习</p>
          </div>
        </div>

        <section className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold">连续打卡</h2>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">已连续 5 天！🔥</span>
          </div>
          <div className="flex justify-between bg-white dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-50 dark:border-primary/5">
            {['一', '二', '三', '四'].map((day) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-emerald-400">{day}</span>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-icons text-sm">check</span>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-primary">五</span>
              <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary">
                <span className="text-xs font-bold">24</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30">
              <span className="text-[10px] font-bold">六</span>
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
                <span className="text-xs font-bold">25</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-30">
              <span className="text-[10px] font-bold">日</span>
              <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center">
                <span className="text-xs font-bold">26</span>
              </div>
            </div>
          </div>
        </section>

        {/* Start Learning Button - Placed in flow to avoid overlap with BottomNav */}
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
