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
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value
    });
  }
  render() {
    return (
      <div className="App">
          <p>
            <Input 
             ref={ component => this.a = component} 
             onupdate={this.update} />
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

class Input extends Component {
  render() {
    return <span><input ref="input" type="text" onChange={this.props.update} /></span>
  }
}

export default App;
