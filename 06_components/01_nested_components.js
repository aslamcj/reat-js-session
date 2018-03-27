import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button>Sample Button <Hearts/></Button>
      </div>
    )
  }
}

const Button = (props) => <button>{props.children}</button>;

class  Hearts extends Component {
  render() {
    return ( <span>&hearts; <AnotherHearts/></span> )
  }
}

class  AnotherHearts extends Component {
  render() {
    return ( <span>&hearts;</span> )
  }
}

export default App;
