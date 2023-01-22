import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import LandingPage from '../pages/landingPage';

export default function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
