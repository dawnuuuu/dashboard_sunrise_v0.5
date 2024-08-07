import React from 'react';
import Tree from 'react-d3-tree';
import '../styles/ScenarioTaxonomy.css';
import { treeData } from '../data/scenarioData'; // Ensure you have this file and export

const containerStyles = {
  width: '100%',
  height: '100%',
};

const nodeStyle = {
  shape: 'rect',  // Shape of the node
  shapeProps: {
    width: 140,  // Width of the rectangle
    height: 50,  // Height of the rectangle
    x: -70,      // X offset (half of width to center it)
    y: -25,      // Y offset (half of height to center it)
    fill: 'lightblue',  // Background color of the node
  },
};

function ScenarioTaxonomy() {
  return (
    <div style={containerStyles} id="treeWrapper">
      <Tree 
        data={treeData}  // Make sure treeData is correctly imported and defined
        orientation="vertical"
        pathFunc="straight"
        nodeSvgShape={nodeStyle}
        textLayout={{ textAnchor: "middle", x: 0, y: 5 }}  // Adjusted y for better centering
      />
    </div>
  );
}

export default ScenarioTaxonomy;
