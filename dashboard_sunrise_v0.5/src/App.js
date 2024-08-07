// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SunriseDFDashboard from './pages/SunriseDFDashboard';
import DFSearchUI from './pages/DFSearchUI';
import UploadScenario from './pages/UploadScenario';
import './styles/Dashboard.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<SunriseDFDashboard />} />
          <Route path="/search" element={<DFSearchUI />} />
          <Route path="/upload" element={<UploadScenario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
