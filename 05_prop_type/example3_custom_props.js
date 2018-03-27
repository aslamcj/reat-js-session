import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Title textSample="test custom props"/>
      </div>
    )
  }
}

const Title = (props) => <span>{props.textSample}</span>;

Title.propTypes = {
  textSample(props, propName, component) {
    console.log(props, propName, component);
    if(!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if(props[propName].length < 20) {
      return new Error(`${propName} was too short`)
    }
  }
}

export default App;
