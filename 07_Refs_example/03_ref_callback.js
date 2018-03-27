import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      a : '',
      b : ''
    }
  }
  update() {
    this.setState({a: this.a.value});
    this.setState({b: this.refs.b.value});
  }
  render() {
    return (
      <div className="App">
          <p>
            <input type="text" ref={ node => this.a = node} onChange={this.update} />
            {this.state.a}
          </p>
          <p>
            <input type="text" ref="b" onChange={this.update} />
            {this.state.b}
          </p>
      </div>
    )
  }
}

export default App;
