// src/components/SubNavbar.js
import React from 'react';
import '../styles/SubNavbar.css';

function SubNavbar({ setActiveSection }) {
  return (
    <div className="sub-navbar">
      <button className="nav-button" onClick={() => setActiveSection('general')}>
        General Information
      </button>
      <button className="nav-button" onClick={() => setActiveSection('scenarios')}>
        Scenarios
      </button>
      <button className="nav-button" onClick={() => setActiveSection('parameters')}>
        Parameters
      </button>
      <button className="nav-button" onClick={() => setActiveSection('meta-data')}>
        Meta-data
      </button>
      <button className="nav-button" onClick={() => setActiveSection('quality-metrics')}>
        Quality Metrics
      </button>
    </div>
  );
}

export default SubNavbar;
