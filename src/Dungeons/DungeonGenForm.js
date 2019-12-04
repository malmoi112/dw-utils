import React from 'react';
import './DungeonGenerator.css';

class DungeonGenForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.generateContents(
      this.getSelectValue("themeCount"), 
      this.getSelectValue("dangerCount"), 
      this.getSelectValue("discoveryCount")
    );
  }

  getSelectValue = (id) => {
    var selectElement = document.getElementById(id);
    return selectElement.options[selectElement.selectedIndex].value;
  }

  render() {
    return(
      <div className="DungeonGenForm">
        <form onSubmit={this.onFormSubmit}>
          <label>Themes</label>
          <select id="themeCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>Dangers</label>
          <select id="dangerCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label>Discoveries</label>
          <select id="discoveryCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <input type="submit" value="Generate"></input>
        </form>
      </div>
    );
  }
}

export default DungeonGenForm;