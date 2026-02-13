import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StudyPlan from './pages/StudyPlan';
import WordCard from './pages/WordCard';
import Stats from './pages/Stats';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="plan" element={<StudyPlan />} />
        <Route path="learn" element={<WordCard />} />
        <Route path="stats" element={<Stats />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
