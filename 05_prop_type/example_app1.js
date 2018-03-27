import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  prop1 : PropTypes.string,
  prop2 : PropTypes.number.isRequired,
  prop3 : PropTypes.object,
}

App.defaultProps = {
  prop1 : "default prop1",
  prop2 : 1,
  prop3 :  {a:1}
}

export default App;
