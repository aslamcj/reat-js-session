import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Layout extends Component {

  state = {
    users: [
      {name:'amar',age:50},
      {name:'akbar',age:60},
      {name:'antony',age:70},
    ]
  }
  submitForm = () => {
      // changing the state on click of button
      this.setState({
        users: [
          {name:'amar',age:40},
          {name:'akbar',age:50},
          {name:'antony',age:60},
        ]
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.submitForm}>Submit Form</button>
          <ul>
            <li>Name: {this.state.users[0].name} | Age: {this.state.users[0].age}</li>
            <li>Name: {this.state.users[1].name} | Age: {this.state.users[1].age}</li>
            <li>Name: {this.state.users[2].name} | Age: {this.state.users[2].age}</li>
          </ul>
      </div>
    )
  } 
}

export default Layout;
