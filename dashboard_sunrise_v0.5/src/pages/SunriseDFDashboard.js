// src/pages/SunriseDFDashboard.js
import React, { useState } from 'react';
import ConnectedSCDB from '../components/ConnectedSCDB';
import SubNavbar from '../components/SubNavbar';
import GeneralInformation from '../components/GeneralInformation';
import ScenarioTaxonomy from '../components/ScenarioTaxonomy';
import ParametersList from '../components/ParametersList';
import ScenarioPartition from '../components/ScenarioPartition';
import MetaDataOntology from '../components/MetaDataOntology';
import QualityMetrics from '../components/QualityMetrics';
import '../styles/Dashboard.css';

function SunriseDFDashboard() {
  // State to track the active content
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div className="dashboard">
      <div className="top-panel">
        <ConnectedSCDB />
        <div className="right-panel">
          <SubNavbar setActiveSection={setActiveSection} />
          <div className="info-panel">
            {activeSection === 'general' && (
              <>
                <GeneralInformation />
                <ScenarioTaxonomy />
                <ParametersList />
                <ScenarioPartition />
                <MetaDataOntology />
                <QualityMetrics />
              </>
            )}
            {activeSection === 'scenarios' && <ScenarioTaxonomy />}
            {activeSection === 'parameters' && <ParametersList />}
            {activeSection === 'meta-data' && <MetaDataOntology />}
            {activeSection === 'quality-metrics' && <QualityMetrics />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunriseDFDashboard;
