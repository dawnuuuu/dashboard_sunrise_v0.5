// src/components/MetaDataOntology.js
import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import '../styles/MetaDataOntology.css';

function MetaDataOntology() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create nodes and edges using DataSet
    const nodes = new DataSet([
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
    ]);

    const edges = new DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ]);

    const data = {
      nodes,
      edges,
    };

    const options = {
      nodes: {
        shape: 'box',
        size: 20,
        color: {
          background: 'lightblue',
          border: '#333',
        },
        font: {
          color: '#333',
          size: 14,
        },
      },
      edges: {
        color: 'lightgray',
        width: 2,
      },
      layout: {
        hierarchical: {
          enabled: true,
          levelSeparation: 100,
          nodeSpacing: 200,
          direction: 'UD',
          sortMethod: 'directed',
        },
      },
    };

    // Initialize the network
    const network = new Network(containerRef.current, data, options);

    // Clean up the network on component unmount
    return () => {
      network.destroy();
    };
  }, []);

  return <div ref={containerRef} style={{ height: '500px', border: '1px solid #ddd', borderRadius: '8px' }} />;
}

export default MetaDataOntology;
