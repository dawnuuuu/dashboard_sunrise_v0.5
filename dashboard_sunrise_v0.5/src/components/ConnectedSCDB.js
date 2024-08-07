// src/components/ConnectedSCDB.js
import React from 'react';
import '../styles/ConnectedSCDB.css'; // CSS file for styling

function ConnectedSCDB() {
  const databases = ['Adscene', 'StreetWise', 'Scenius', 'VMMethods', 'SafetyPool'];

  return (
    <div className="connected-scdb">
      <h3>Connected SCDB</h3>
      <ul>
        {databases.map((db) => (
          <li key={db}>
            <label>
              <input type="checkbox" />
              {db}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConnectedSCDB;
