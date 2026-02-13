import type { AppState } from '../store/types';

const STORAGE_KEY = 'language-learner-data';

// 默认状态
export const defaultState: AppState = {
  user: {
    name: 'Alex',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKjfeSGjaiSKklkUuNfXeNS3iy_NIR-sVEH-IaUfivdS4mPy4OmPVIGbWBEQgi9n1nuGu8yc4PmjqDBP5dcG1LTd7SUVUgvKtRfFRR1-_X6m3oS2A8zY6A-JtPhUP3-uYZw0eIVaw39BTBayhWsb5jjFCrogcbKpSxLOQbih_lv0W3tKhleroVX9WU3EZsnyIANu05-fDlp-S6mhSh2HPB2chMpqOnypRSAp4wRpwV_hgV_EWpLcfdsLn2Zn47tAv--eaSoOVpJeEL',
    streak: 5,
    totalMastered: 1102,
    lastActiveDate: new Date().toISOString().split('T')[0]
  },
  settings: {
    dailyTarget: 50,
    reviewIntensity: 2,
    currentBookId: 'ielts-core',
    notificationsEnabled: true,
    reminderTime: '09:00'
  },
  learningRecords: [],
  todayLearned: 20,
  todayNewWords: 12,
  todayReviewWords: 8,
  currentSession: null
};

// 从 LocalStorage 加载状态
export function loadState(): AppState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Partial<AppState>;
      // 合并默认状态和保存的状态
      return {
        ...defaultState,
        ...parsed,
        user: { ...defaultState.user, ...parsed.user },
        settings: { ...defaultState.settings, ...parsed.settings },
        learningRecords: parsed.learningRecords || [],
        currentSession: null // 会话不持久化
      };
    }
  } catch (error) {
    console.error('Failed to load state from localStorage:', error);
  }
  return defaultState;
}

// 保存状态到 LocalStorage
export function saveState(state: AppState): void {
  try {
    // 不保存当前会话
    const toSave = {
      ...state,
      currentSession: null
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (error) {
    console.error('Failed to save state to localStorage:', error);
  }
}

// 清除所有数据
export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear state from localStorage:', error);
  }
}

// 检查是否是新的一天
export function isNewDay(lastActiveDate: string): boolean {
  const today = new Date().toISOString().split('T')[0];
  return lastActiveDate !== today;
}

// 获取今天的日期字符串
export function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

// 格式化日期显示
export function formatDateDisplay(dateStr: string): string {
  const date = new Date(dateStr);
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = days[date.getDay()];
  return `${month}月${day}日 ${weekday}`;
}
