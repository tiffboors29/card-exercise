import React, { Component } from 'react';

import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="card-wrapper">
            <h2 className="card-header">Lending Health Card</h2>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
