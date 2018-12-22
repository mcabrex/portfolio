import React, { Component } from 'react';
import { BlackBar } from './BlackBar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bar-top">
          <BlackBar />
        </div>
        <div className="bar-bottom">
          <BlackBar />
        </div>
      </div>
    );
  }
}

export default App;
