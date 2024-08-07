import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/ChartStyles.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function QualityMetrics({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quality Metrics',
      },
    },
  };

  // Provide default data to avoid undefined errors
  const defaultData = {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: [],
    }]
  };

  return (
    <div className="chart-container">
      <h2>Quality Metrics</h2>
      <Bar options={options} data={data || defaultData} />
    </div>
  );
}

export default QualityMetrics;
