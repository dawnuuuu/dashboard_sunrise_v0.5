// src/components/GeneralInformation.js
import React from 'react';
import '../styles/GeneralInformation.css'; // CSS file for styling

function GeneralInformation() {
  const generalInfo = {
    ODD: 'Urban City',
    Cost: '$200M',
    Version: '1.0.3',
    'Data Quantity': '1500 TB',
    Owner: 'Sunrise Inc.',
  };

  return (
    <div className="general-info">
      <h3>General Information</h3>
      <ul>
        {Object.entries(generalInfo).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeneralInformation;
