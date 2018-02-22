// Simple Events : Calling from child component

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
    render() {
      var textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
      };

      return (
        <div style={textStyle}>
          {this.props.display}
        </div>
      );
    }
}

// Child Component
class PlusButton extends React.Component {
    render() {

      console.log(this.props);
      return (
        <button onClick={this.props.clickHandler} style={this.props.styles}>
          +
        </button>
      );
    }
}

class CounterParent extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };

      this.increase = this.increase.bind(this);
    }

    increase(e) {
      var currentCount = this.state.count;

        if(e.shiftKey) {
          currentCount += 10;
        } else {
          currentCount += 1;
        }

        this.setState({
          count : currentCount
        });
    }

    /*

    */
    render() {

      var backgroundStyle = {
        padding: 50,
        backgroundColor: "#FFC53A",
        width: 250,
        height: 100,
        borderRadius: 10,
        textAlign: "center",
        margin: 20
      };

      var buttonStyle = {
        fontSize: "1em",
        width: 30,
        height: 30,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold",
        lineHeight: "3px"
      };

       return (
        <div style={backgroundStyle}>
          <Counter display={this.state.count} />
          {/*Calling click event directly inside the JSX */}
          <button onClick={this.increase} style={buttonStyle}>+</button>

          {/*Passing click event to child component */}
          <PlusButton clickHandler={this.increase} styles={buttonStyle} />

        </div>
      );
    }
  }


export default CounterParent;
