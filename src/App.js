import React, { Component } from 'react';
import DATA from './data.json';
import SocialCard from './socialcard/component';
import './styles.scss'
import ErrorBoundary from './features/errorboundary/component';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <SocialCard data={DATA}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
