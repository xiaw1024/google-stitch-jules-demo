import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Layout() {
  const location = useLocation();
  // Show navigation on Home, Stats, and Profile pages
  const showNav = ['/', '/stats', '/profile'].includes(location.pathname);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col font-display transition-colors duration-200">
      <main className={`flex-1 ${showNav ? 'pb-24' : ''}`}>
        <Outlet />
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}
