import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/ChartStyles.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function ScenarioPartition({ data }) {
  // Provide default data to avoid undefined errors
  const defaultData = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
    }]
  };

  return (
    <div className="chart-container">
      <h2>Scenario Partition</h2>
      <Pie data={data || defaultData} />
    </div>
  );
}

export default ScenarioPartition;
