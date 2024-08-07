// src/components/ParametersDistributionChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Add ArcElement for charts that need it
} from 'chart.js';
import '../styles/ChartStyles.css';

// Register all required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Register ArcElement if you are using pie charts or similar
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Parameter Distribution',
    },
  },
};

const data = {
  labels: ['Param 1', 'Param 2', 'Param 3', 'Param 4'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

function ParametersDistributionChart() {
  return (
    <div className="chart-container">
      <Bar options={options} data={data} className="canvas" />
    </div>
  );
}

export default ParametersDistributionChart;
