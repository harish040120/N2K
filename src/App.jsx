import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import TrackingPortal from './pages/TrackingPortal';
import Home from './pages/Home';
import AgentSignup from './pages/AgentSignup';
import DriverPortal from './pages/DriverPortal';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/track" element={<TrackingPortal />} />
            <Route path="/agent-signup" element={<AgentSignup />} />
            <Route path="/driver" element={<DriverPortal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}