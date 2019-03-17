import React, { Component } from 'react';
import DATA from './data.json';
import SocialCard from './socialcard/component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SocialCard data={DATA}/>
      </div>
    );
  }
}

export default App;
