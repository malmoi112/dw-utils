import React from 'react';
import * as tables from './dungeonTables.json';
import './DungeonGenerator.css';

import DungeonGenForm from './DungeonGenForm';
import DungeonGenDisplay from './DungeonGenDisplay';

class DungeonGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      builder: '',
      keepBuilder: false,
      function: '',
      keepFunction: false,
      ruination: '',
      keepRuination: false,
      themes: [],
      keepThemes: false,
      dangers: [],
      keepDangers: false,
      discoveries: [],
      keepDiscoveries: false
    };
  }
  
  randomInt = (maxInt) => {
    var randInt = Math.floor(Math.random() * maxInt);
    return randInt;
  }
  uniqueRandomInts = (maxInt, intCount) => {
    let uniqueInts = [];
    while(uniqueInts.length < intCount) {
      let attempt = this.randomInt(maxInt);
      if(!uniqueInts.includes(attempt)) {
        uniqueInts.push(attempt);
      }
    }
    return uniqueInts;
  }
  getThemes(themeCount) {
    var themBuilder = [];
    let intArray = this.uniqueRandomInts(12, themeCount);
    for(let i = 0; i < intArray.length; i++) {
      var themeType = this.randomInt(12);
      var newTheme = {
        type: '',
        desc: ''
      };
      newTheme.type = "mundane";
      newTheme.desc = tables.themes.mundane[intArray[i]];
      
      if(themeType < 6) {
        newTheme.type = "Mundane";
        newTheme.desc = tables.themes.mundane[intArray[i]];
      }
      else if(themeType < 10) {
        newTheme.type = "Unusual";
        newTheme.desc = tables.themes.unusual[intArray[i]]
      }
      else {
        newTheme.type = "Extraordinary";
        newTheme.desc = tables.themes.extraordinary[intArray[i]]
      }
      themBuilder.push(newTheme);
    }
    return themBuilder;
  }
  getDangers(dangerCount) {
    let dangBuilder = [];
    let intArray = this.uniqueRandomInts(12, dangerCount);
    console.log('ints generated', intArray);
    for(let i = 0; i < intArray.length; i++) {
      var dangerType = this.randomInt(12);
      var newDanger = {
        type: '',
        desc: ''
      };
      console.log('danger type: ', dangerType);
      if(dangerType < 6) {
        newDanger.type = "Trap";
        newDanger.desc = tables.dangers.traps[intArray[i]];
      }
      else if(dangerType < 12) {
        newDanger.type = "Creature";
        newDanger.desc = tables.dangers.creatures[intArray[i]];
      }
      else {
        newDanger.type = "Entity";
        newDanger.desc = tables.dangers.entities[intArray[i]];
      }
      dangBuilder.push(newDanger);
    }
    console.log(dangBuilder);
    return dangBuilder;
  }
  getDiscoveries(discoveryCount) {
    let discBuilder = [];
    let intArray = this.uniqueRandomInts(12, discoveryCount);
    for(let i = 0; i < intArray.length; i++) {
      let discType = this.randomInt(12);
      var newDisc = {
        type: '',
        desc: ''
      };
      if(discType < 4) {
        newDisc.type = "Dressing";
        newDisc.desc = tables.discoveries.dressing[intArray[i]];
      }
      else if(discType < 10) {
        newDisc.type = "Feature";
        newDisc.desc = tables.discoveries.feature[intArray[i]];
      }
      else {
        newDisc.type = "Asset";
        newDisc.desc = tables.discoveries.asset[intArray[i]];
      }
      discBuilder.push(newDisc);
    }
    return discBuilder;
  }
  generateContents = (themeCount, dangerCount, discoveryCount) => {
    var genBuilder = tables.builders[this.randomInt(9)];
    var funBuilder = tables.functions[this.randomInt(9)];
    var ruinBuilder = tables.ruinations[this.randomInt(8)];
    var themBuilder = this.getThemes(themeCount);
    var dangBuilder = this.getDangers(dangerCount);
    var discBuilder = this.getDiscoveries(discoveryCount);
  
    this.setState({
      builder: genBuilder,
      function: funBuilder,
      ruination: ruinBuilder,
      themes: themBuilder,
      dangers: dangBuilder,
      discoveries: discBuilder
    });
  }

  render() {
    return(
      <div className="DungeonGenerator">
        <h1>Bite-Sized Dungeon Generator</h1>
        <span>Uses the dungeon tables as found in the  
          <a href="https://a-dungeon-world.fandom.com/wiki/Dungeon_Building"> DW wiki dungeon building tables</a>
        </span><br /><br />
        <DungeonGenForm 
          generateContents = {this.generateContents}
        ></DungeonGenForm>

        <DungeonGenDisplay
          builderDisplay={this.state.builder}
          functionDisplay={this.state.function}
          ruinationDisplay={this.state.ruination}
          themeDisplay={this.state.themes}
          dangerDisplay={this.state.dangers}
          discoveryDisplay={this.state.discoveries}
        ></DungeonGenDisplay>
      </div>
    );
  }
} 

export default DungeonGenerator; 