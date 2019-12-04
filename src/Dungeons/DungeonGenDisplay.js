import React from 'react';
import './DungeonGenerator.css';

import ElementDisplay from './ElementDisplay';

class DungeonGenDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DungeonGenDisplay">
        <h3>Builder</h3>
        <div>{this.props.builderDisplay}</div>
        <h3>Function</h3>
        <div>{this.props.functionDisplay}</div>
        <h3>Ruination</h3>
        <div>{this.props.ruinationDisplay}</div>
        <h3>Themes</h3>
        <div>{this.props.themeDisplay.map((theme) => 
          <li>
            {
              <ElementDisplay
                type={theme.type}
                desc={theme.desc}
              ></ElementDisplay>
            }
          </li>)}
        </div>
        <h3>Dangers</h3>
        <div>{this.props.dangerDisplay.map((danger) => 
          <li>
            {
              <ElementDisplay
                type={danger.type}
                desc={danger.desc}
              ></ElementDisplay>
            }
          </li>)}
        </div>
        <h3>Discoveries</h3>
        <div>{this.props.discoveryDisplay.map((discovery) => 
          <li>
            {
              <ElementDisplay
                type={discovery.type}
                desc={discovery.desc}
              ></ElementDisplay>
            }
          </li>)}
        </div>
      </div>
    );
  }
}

export default DungeonGenDisplay;