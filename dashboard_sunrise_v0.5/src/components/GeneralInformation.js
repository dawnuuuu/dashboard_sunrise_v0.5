// src/components/GeneralInformation.js
import React from 'react';
import '../styles/GeneralInformation.css';

function GeneralInformation({ data }) {
  // Example data structure for general info
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
      <table>
        <tbody>
          {Object.entries(generalInfo).map(([key, value]) => (
            <tr key={key}>
              <td className="info-key">{key}</td>
              <td className="info-value">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneralInformation;
