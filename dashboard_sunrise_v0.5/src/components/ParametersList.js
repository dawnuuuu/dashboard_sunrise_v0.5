import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ParametersList.css'; // Ensure this path is correct

function ParametersList({ data }) {
  // Example data transformation assuming data has 'type' and 'name' fields
  const transformedData = data.reduce((acc, item) => {
    const parameters = Object.entries(item).map(([key, value]) => ({
      type: key, // Assuming 'type' is a key in your data
      name: value.toString(), // Assuming 'name' is a value
    }));
    return [...acc, ...parameters];
  }, []);

  return (
    <div className="parameters-list">
      <h2>Parameters List</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Parameter Name</th>
          </tr>
        </thead>
        <tbody>
          {transformedData.map((param, index) => (
            <tr key={index}>
              <td>{param.type}</td>
              <td>{param.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ParametersList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ParametersList;
