import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LightningCounter extends Component {
 constructor(props, context){
    super(props, context);
    this.state = {
      strikes : 0,
      timer: 1
    }
    this.timeTicker = this.timeTicker.bind(this);
 }
 componentDidMount() {
   console.log("component Did mount");
   setInterval(this.timeTicker, 1000);
 }
 timeTicker() {
  // Using call back with previous state
  this.setState( (prevState) => {
    console.log(prevState);
    return {
      strikes : prevState.strikes + 100
    }
   })
  
  // this.setState({
  //    strikes : this.state.strikes+100
  //  });


 }
  render() {
    return(
      <div>
        <h1>Lightning Strike</h1>
        <h2>{this.state.strikes}</h2>
        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}


export default LightningCounter;
