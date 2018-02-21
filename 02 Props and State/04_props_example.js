import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Layout extends Component {

  render() {
   
    return (
      <div>
        <Header title="Static Welcome Message"/>
        <Header title="Another Static Welcome Message" newtitle="check this is new title">Hello</Header>
      </div>
    )
 } 
}

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <Title title={this.props.title} />
    )
  }
}
class Title extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

export default Layout;

// Modify the above code to print all props values
