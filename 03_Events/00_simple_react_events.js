import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Layout extends Component {
  
  buttonClick = () => {
    console.log('Button Click');
  }
  
  inputFocus = () => {
    console.log('Input Element Focus');
  }
  
  inputKey = () => {
    console.log('Input key up event');
  }

  render() {
    var styling = {
      width: 100,
      height: 100,
      margin: 20
    }
    return (
      <div style={styling}>
        <button onClick={this.buttonClick}>Submit Form</button>
        <br/>
        <br/>
        <input type="text" onFocus={this.inputFocus} onKeyUp={this.inputKey} />
      </div>
    )
  } 
}

export default Layout;
