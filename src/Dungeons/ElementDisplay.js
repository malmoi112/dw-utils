import React from 'react';
import './DungeonGenerator.css';

function ElementDisplay(props) {
  return (
    <div className="ElementDisplay">
      <span>{props.type} - </span>
      <span>{props.desc}</span>
    </div>
  );
}

export default ElementDisplay;