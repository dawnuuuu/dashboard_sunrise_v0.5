// src/components/ScenarioTaxonomy.js
import React from 'react';
import '../styles/ScenarioTaxonomy.css'; // CSS file for styling

function ScenarioTaxonomy() {
  // Placeholder scenario data
  const scenarios = [
    {
      name: 'Functional Scenario 1',
      logicalScenarios: ['Logical Scenario 1', 'Logical Scenario 2'],
    },
    {
      name: 'Functional Scenario 2',
      logicalScenarios: ['Logical Scenario 3', 'Logical Scenario 4'],
    },
  ];

  return (
    <div className="scenario-taxonomy">
      <h3>Scenario Taxonomy</h3>
      <ul>
        {scenarios.map((scenario, index) => (
          <li key={index}>
            {scenario.name}
            <ul>
              {scenario.logicalScenarios.map((logical, i) => (
                <li key={i}>{logical}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScenarioTaxonomy;
