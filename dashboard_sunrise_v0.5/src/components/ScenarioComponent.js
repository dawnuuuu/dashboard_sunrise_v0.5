import React from 'react';

function ScenarioComponent({ scenario }) {
  return (
    <div>
      <h1>Scenario Details</h1>
      <ul>
        {Object.entries(scenario.getAllParameters()).map(([key, value]) => (
          <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScenarioComponent;
