import { useState } from 'react';
import { useApp } from '../store/AppContext';
import { clearState } from '../utils/storage';

export default function Profile() {
  const { state, updateSettings } = useApp();
  const { user, settings, learningRecords } = state;

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState<string | null>(null);

  // 成就列表
  const achievements = [
    { id: '1', name: '词汇达人', icon: 'emoji_events', unlocked: learningRecords.filter(r => r.status === 'mastered').length >= 10 },
    { id: '2', name: '阅读极客', icon: 'bolt', unlocked: learningRecords.filter(r => r.status === 'mastered').length >= 50 },
    { id: '3', name: '7天挑战', icon: 'calendar_month', unlocked: user.streak >= 7 },
    { id: '4', name: '月度冠军', icon: 'military_tech', unlocked: user.streak >= 30 },
  ];

  // 切换通知设置
  const toggleNotifications = () => {
    updateSettings({ notificationsEnabled: !settings.notificationsEnabled });
  };

  // 分享进度
  const handleShare = () => {
    const shareText = `我已在语言学习应用中掌握了 ${user.totalMastered} 个单词，连续学习 ${user.streak} 天！`;
    navigator.clipboard.writeText(shareText).then(() => {
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    });
  };

  // 退出登录
  const handleLogout = () => {
    clearState();
    window.location.reload();
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen font-display pb-32">
      {/* Toast 提示 */}
      {showShareToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full shadow-lg z-50">
          <div className="flex items-center gap-2">
            <span className="material-icons text-sm">check_circle</span>
            <span className="font-medium">已复制到剪贴板</span>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto min-h-screen flex flex-col pb-10">
        {/* 头像和基本信息 */}
        <header className="pt-12 pb-8 px-6 text-center">
          <div className="relative inline-block mb-4">
            <div className="w-28 h-28 rounded-full border-4 border-primary p-1 bg-white dark:bg-slate-800 shadow-xl overflow-hidden">
              <img
                alt="User Avatar"
                className="w-full h-full object-cover rounded-full"
                src={user.avatar}
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-4 border-background-light dark:border-background-dark flex items-center justify-center">
              <span className="material-icons-outlined text-sm">verified</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{user.name}</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">@lexilearner_92</p>

          {/* 统计卡片 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800/50 p-4 rounded-xl shadow-sm border border-primary/10">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">已掌握单词</p>
              <p className="text-2xl font-bold text-primary">{user.totalMastered.toLocaleString()}</p>
            </div>
            <div className="bg-white dark:bg-slate-800/50 p-4 rounded-xl shadow-sm border border-primary/10">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">当前连击</p>
              <div className="flex items-center justify-center gap-1">
                <span className="material-icons-outlined text-primary text-xl">local_fire_department</span>
                <p className="text-2xl font-bold">{user.streak} 天</p>
              </div>
            </div>
          </div>
        </header>

        {/* 成就 */}
        <section className="px-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">近期成就</h2>
            <button
              onClick={() => setShowSettingsModal('achievements')}
              className="text-primary text-sm font-semibold hover:underline"
            >
              查看全部
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {achievements.map(achievement => (
              <div
                key={achievement.id}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center p-2 shadow-sm border ${achievement.unlocked
                  ? 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700/50'
                  : 'bg-slate-200/50 dark:bg-slate-800/30 border-dashed border-slate-300 dark:border-slate-700'
                  }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${achievement.unlocked ? 'bg-primary/20' : 'bg-slate-200 dark:bg-slate-700'
                  }`}>
                  <span className={`material-icons-outlined ${achievement.unlocked ? 'text-primary' : 'text-slate-400'
                    }`}>
                    {achievement.unlocked ? achievement.icon : 'lock'}
                  </span>
                </div>
                <span className={`text-[10px] text-center font-medium leading-tight ${achievement.unlocked ? '' : 'text-slate-400'
                  }`}>
                  {achievement.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 设置与偏好 */}
        <section className="px-6 space-y-3">
          <h2 className="text-lg font-bold mb-4">设置与偏好</h2>

          {/* 学习提醒 */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-primary">notifications_active</span>
              </div>
              <div>
                <p className="font-semibold text-sm">学习提醒</p>
                <p className="text-xs text-slate-400">每天早上 {settings.reminderTime}</p>
              </div>
            </div>
            <button
              onClick={toggleNotifications}
              className={`w-12 h-6 rounded-full relative transition-colors ${settings.notificationsEnabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm ${settings.notificationsEnabled ? 'right-0.5' : 'left-0.5'
                }`}></div>
            </button>
          </div>

          {/* 离线词库 */}
          <button
            onClick={() => setShowSettingsModal('offline')}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-blue-500">cloud_download</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">离线词库</p>
                <p className="text-xs text-slate-400">3个离线词包可用</p>
              </div>
            </div>
            <span className="material-icons-outlined text-slate-300">chevron_right</span>
          </button>

          {/* 账户设置 */}
          <button
            onClick={() => setShowSettingsModal('account')}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-orange-500">person</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">账户设置</p>
                <p className="text-xs text-slate-400">个人资料、隐私与安全</p>
              </div>
            </div>
            <span className="material-icons-outlined text-slate-300">chevron_right</span>
          </button>

          {/* 帮助与支持 */}
          <button
            onClick={() => setShowSettingsModal('help')}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-500/10 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-slate-500">help_outline</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">帮助与支持</p>
                <p className="text-xs text-slate-400">常见问题、联系我们</p>
              </div>
            </div>
            <span className="material-icons-outlined text-slate-300">chevron_right</span>
          </button>
        </section>

        {/* 底部按钮 */}
        <div className="mt-auto px-6 pt-8 pb-8">
          <button
            onClick={handleShare}
            className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span className="material-icons-outlined">share</span>
            分享我的进度
          </button>
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className="w-full mt-4 text-rose-500 font-semibold py-2 text-sm hover:underline"
          >
            退出登录
          </button>
        </div>
      </div>

      {/* 退出确认弹窗 */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-sm">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-icons text-rose-500 text-3xl">logout</span>
              </div>
              <h3 className="text-xl font-bold mb-2">确认退出？</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                退出后所有学习数据将被清除
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 py-3 rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-600 transition-colors"
              >
                确认退出
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 设置详情弹窗 */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-t-3xl p-6 pb-24 max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {showSettingsModal === 'achievements' && '全部成就'}
                {showSettingsModal === 'offline' && '离线词库'}
                {showSettingsModal === 'account' && '账户设置'}
                {showSettingsModal === 'help' && '帮助与支持'}
              </h2>
              <button
                onClick={() => setShowSettingsModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center"
              >
                <span className="material-icons text-sm">close</span>
              </button>
            </div>

            {showSettingsModal === 'achievements' && (
              <div className="grid grid-cols-3 gap-4">
                {achievements.map(a => (
                  <div key={a.id} className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${a.unlocked ? 'bg-primary/20' : 'bg-slate-200 dark:bg-slate-600'
                      }`}>
                      <span className={`material-icons text-2xl ${a.unlocked ? 'text-primary' : 'text-slate-400'}`}>
                        {a.unlocked ? a.icon : 'lock'}
                      </span>
                    </div>
                    <p className="font-semibold text-sm">{a.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{a.unlocked ? '已解锁' : '未解锁'}</p>
                  </div>
                ))}
              </div>
            )}

            {showSettingsModal === 'offline' && (
              <div className="space-y-3">
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  下载词库后可离线学习
                </p>
                {['雅思核心词汇', '托福高级词汇', 'GRE核心词汇'].map((name, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                    <span className="font-medium">{name}</span>
                    <span className="text-xs text-primary font-semibold">已下载</span>
                  </div>
                ))}
              </div>
            )}

            {showSettingsModal === 'account' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">用户名</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">邮箱</p>
                  <p className="font-medium">alex@example.com</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <p className="text-xs text-slate-400 mb-1">注册时间</p>
                  <p className="font-medium">2024年1月15日</p>
                </div>
              </div>
            )}

            {showSettingsModal === 'help' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <h4 className="font-semibold mb-2">如何学习单词？</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    点击首页的"开始学习"按钮，进入单词卡片页面。点击显示释义后，选择"认识"、"不确定"或"忘记"来标记掌握程度。
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <h4 className="font-semibold mb-2">如何更改学习计划？</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    点击底部导航栏中间的"+"按钮，进入学习计划页面，可以调整每日新词数量和复习强度。
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                  <h4 className="font-semibold mb-2">联系我们</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    邮箱：support@languagelearner.app
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
