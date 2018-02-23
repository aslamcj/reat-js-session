import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Circle extends React.Component {
  render() {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height: 100
    };

    return (
      <div style={circleStyle}>
      </div>
    );
  }
}

var c1 = <Circle bgColor="#111111" />;
var c2 = <Circle bgColor="#0074D9" />;

var colorsList = ['#111111',"#0074D9","#B10DC9","#01FF70","#1C77C3", "#39A9DB","#40BCD8","#F8C391", "#D63230" ];

var colorsJsxArrayList = colorsList.map(function(c){
  return <Circle bgColor={c} />
})



function showColors() {

  var ran = Math.floor(Math.random()* colorsList.length);

  return <Circle bgColor = {colorsList[ran]} />;
}

class MakeCircle extends React.Component {
  render() {
    return (
      <div>
        <Circle bgColor="#F9C240" />
        {/* Calling JSX with assigned variables*/}
        {/*Method 1*/}
        {c1}
        {c2}
        <br/>
        <br/>
        {/*Method 2: Passing jsx as function*/}
        <h1> NEW random color list</h1>
        {showColors()}
        
        {/*Method 3 : Passing jsx as Array*/}
        {colorsJsxArrayList}
      </div>
    );
  }
}

export default MakeCircle;
