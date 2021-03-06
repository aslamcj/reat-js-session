import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Layout extends Component {

  state = {
    users: [
      {name:'amar',age:50},
      {name:'akbar',age:60},
      {name:'antony',age:70},
    ],
    fullName: 'Zahid Ali'
  }
  submitForm = (newAge) => {
      // changing the state on click of button
      this.setState({
        users: [
          {name:'amar',age:newAge+10},
          {name:'akbar',age:newAge+20},
          {name:'antony',age:newAge+30},
        ]
      });
  }

  changeName = (event) => {
    this.setState({fullName: event.target.value})
  }

  render() {
    return (
      <div>
        
          <ul>
            <li>Name: {this.state.users[0].name} | Age: {this.state.users[0].age}</li>
            <li>Name: {this.state.users[1].name} | Age: {this.state.users[1].age}</li>
            <li>Name: {this.state.users[2].name} | Age: {this.state.users[2].age}</li>
          </ul>
          <button onClick={() => this.submitForm(10)}>Submit Form</button> <br/>
          <button onClick={() => this.submitForm(20)}>Submit Form</button> <br/>
          <button onClick={this.submitForm.bind(this,30)}>Submit Form</button> <br/>

          <input type="text" value={this.state.fullName} onChange={this.changeName} />
          <h4>Name Entered {this.state.fullName}</h4>
      </div>
    )
  } 
}

export default Layout;
