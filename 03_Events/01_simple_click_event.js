import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Layout extends Component {
  submitForm = () => {
    console.log('submitted the data');
  }

  render() {
    return (
      <div>
        <button onClick={this.submitForm}>Submit Form</button>
      </div>
    )
  } 
}

export default Layout;
