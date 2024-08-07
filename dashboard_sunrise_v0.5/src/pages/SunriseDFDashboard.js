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
import ParametersDistributionChart from '../components/ParametersDistributionChart';
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
          {activeSection === 'general' && (
            <div className="info-panel">
              <GeneralInformation />
              <ScenarioTaxonomy />
              <ParametersList />
              <ScenarioPartition />
              <ParametersDistributionChart />
              <MetaDataOntology />
              <QualityMetrics />
            </div>
          )}
          {activeSection !== 'general' && (
            <div className="content-panel">
              {activeSection === 'scenarios' && (
                <>
                  <ScenarioTaxonomy />
                  <ScenarioPartition />
                  
                </>
              )}
              {activeSection === 'parameters' && (
                <>
                  <ParametersList />
                  <ParametersDistributionChart />
                </>
              )}
              {activeSection === 'meta-data' && (
                <>
                  <MetaDataOntology />
                </>
              )}
              {activeSection === 'quality-metrics' && (
                <>
                  <QualityMetrics />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SunriseDFDashboard;
