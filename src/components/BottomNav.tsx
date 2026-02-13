import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-primary/10 px-6 py-4 pb-8 flex justify-between items-center z-50">
      <Link to="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-primary' : 'text-slate-400'}`}>
        <span className="material-icons-round text-2xl">home</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
      </Link>
      <Link to="/learn" className={`flex flex-col items-center gap-1 ${isActive('/learn') ? 'text-primary' : 'text-slate-400'}`}>
        <span className="material-icons-round text-2xl">menu_book</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Cards</span>
      </Link>
      <Link to="/plan" className="relative -top-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark">
        <span className="material-icons-round text-3xl font-bold">add</span>
      </Link>
      <Link to="/stats" className={`flex flex-col items-center gap-1 ${isActive('/stats') ? 'text-primary' : 'text-slate-400'}`}>
        <span className="material-icons-round text-2xl">insights</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Stats</span>
      </Link>
      <Link to="/profile" className={`flex flex-col items-center gap-1 ${isActive('/profile') ? 'text-primary' : 'text-slate-400'}`}>
        <span className="material-icons-round text-2xl">person</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
      </Link>
    </nav>
  );
}
