/*
Following example is to show case the problem, when ever input1 or input2 value changes
the set state will be changed for both
*/
import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      a : 1,
      b : 2
    }
  }
  update(e) {
    this.setState({a: e.target.value});
    this.setState({b: e.target.value});
  }
  render() {
    return (
      <div className="App">
          <p>
            <input type="text" onChange={this.update} />
            {this.state.a}
          </p>
          <p>
            <input type="text" onChange={this.update} />
            {this.state.b}
          </p>
      </div>
    )
  }
}

export default App;
