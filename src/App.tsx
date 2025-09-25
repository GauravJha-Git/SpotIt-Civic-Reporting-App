import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { PublicPanel } from './components/PublicPanel';
import { AuthorityPanel } from './components/AuthorityPanel';
import { CheckReports } from './components/CheckReports';
import { ReportIssue } from './components/ReportIssue';
import { RapidAlert } from './components/RapidAlert';
import { Navbar } from './components/Navbar';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant={isLandingPage ? 'landing' : 'default'} />
      <main className={isLandingPage ? '' : 'pt-14'}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/public" element={<PublicPanel />} />
          <Route path="/public/reports" element={<CheckReports />} />
          <Route path="/public/report-issue" element={<ReportIssue />} />
          <Route path="/public/rapid-alert" element={<RapidAlert />} />
          <Route path="/authority" element={<AuthorityPanel />} />
          {/* Catch-all route for preview system */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}