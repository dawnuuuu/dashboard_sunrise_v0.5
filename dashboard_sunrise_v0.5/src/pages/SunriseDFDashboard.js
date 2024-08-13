// src/pages/SunriseDFDashboard.js
import React, { useState, useEffect } from 'react';
import ConnectedSCDB from '../components/ConnectedSCDB';
import SubNavbar from '../components/SubNavbar';
import GeneralInformation from '../components/GeneralInformation';
import ScenarioTaxonomy from '../components/ScenarioTaxonomy';
import ParametersList from '../components/ParametersList';
import ScenarioPartition from '../components/ScenarioPartition';
import MetaDataOntology from '../components/MetaDataOntology';
import QualityMetrics from '../components/QualityMetrics';
import ParametersDistributionChart from '../components/ParametersDistributionChart';
import { mockData, partitionData, qualityMetricsData } from '../data/mockData';
import '../styles/Dashboard.css';

function SunriseDFDashboard() {
    const [data, setData] = useState([]);
    const [activeSection, setActiveSection] = useState('general');

    useEffect(() => {
        // Load mock data on component mount
        setData(mockData);
    }, []);

    return (
        <div className="dashboard">
            <div className="top-panel">
                <div className="left-panel">
                    <ConnectedSCDB />
                    <ParametersList data={data} />
                </div>
                <div className="right-panel">
                    <SubNavbar setActiveSection={setActiveSection} />
                    {activeSection === 'general' && (
                        <div className="info-panel">
                            <GeneralInformation data={data} />
                            <ScenarioTaxonomy data={data} />
                            <ScenarioPartition data={partitionData} />
                            <ParametersDistributionChart data={data} />
                            <MetaDataOntology data={data} />
                            <QualityMetrics data={qualityMetricsData} />
                        </div>
                    )}
                    {activeSection !== 'general' && (
                        <div className="content-panel">
                            {activeSection === 'scenarios' && (
                                <>
                                    <ScenarioTaxonomy data={data} />
                                    <ScenarioPartition data={partitionData} />
                                </>
                            )}
                            {activeSection === 'parameters' && (
                                <>
                                    <ParametersList data={data} />
                                    <ParametersDistributionChart data={data} />
                                </>
                            )}
                            {activeSection === 'meta-data' && (
                                <>
                                    <MetaDataOntology data={data} />
                                </>
                            )}
                            {activeSection === 'quality-metrics' && (
                                <>
                                    <QualityMetrics data={qualityMetricsData} />
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
