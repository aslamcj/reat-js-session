import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {

  constructor() {
    super();
    this.state = {
      txt : 'default set state vaue',
      num : 1000
    }
  }

  update (e) {
    this.setState({txt: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>This set state value
          <span style={{color:'blue'}}>{this.state.txt} </span>
          and second value
          <span style={{color:'blue'}}>{this.state.num}</span>
        </h1>
      </div>
    );
  }
}

export default App;
