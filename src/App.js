import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './Day';
import Hour from './Hour';
import Minute from './Minute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <section className="App-intro">
          <Day />
          <Hour />
          <Minute />
        </section>
      </div>
    );
  }
}

export default App;
