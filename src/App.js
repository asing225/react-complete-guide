import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    /*return (
      <div className="App">
        <h1>Hi! This is a react App</h1>
      </div>
    );*/
    return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi! This is a react app.'));
  }
}

export default App;
