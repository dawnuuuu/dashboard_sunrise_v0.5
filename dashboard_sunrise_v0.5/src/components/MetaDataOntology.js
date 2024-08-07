// src/components/MetaDataOntology.js
import React from 'react';
import { mockMetaData } from '../data/mockMetaData';
import '../styles/MetaDataOntology.css';

function renderTree(nodes) {
  return (
    <ul>
      {nodes.map((node, index) => (
        <li key={index}>
          {node.name}
          {node.children && renderTree(node.children)}
        </li>
      ))}
    </ul>
  );
}

function MetaDataOntology() {
  return (
    <div className="meta-data-ontology">
      <h3>Meta-Data Ontology</h3>
      {renderTree(mockMetaData)}
    </div>
  );
}

export default MetaDataOntology;
