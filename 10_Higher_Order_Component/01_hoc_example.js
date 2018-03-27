import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom'

const HOC = (InnerComponent) => class extends Component {
  constructor() {
    super();
    this.state = { count: 0}
  }
  componentWillMount() {
    console.log("HOC componentWillMount");
  }
  update() {
    this.setState({count : this.state.count+1});
  }
  render() {
    return ( <InnerComponent
      {...this.props}
      {...this.state}
      update = {this.update.bind(this)}
    />);
  }
}

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
          <Button>Button</Button>
          <hr/>
          <LabelHOC>Lable</LabelHOC>
      </div>
    );
  }
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>);

class Lable extends Component {
  componentWillMount() {
    console.log("Label componentWillMount");
  }
  render() {
    return (<label onMouseOver={this.props.update}>{this.props.children}  - {this.props.count}</label>)
  }
}

const LabelHOC = HOC(Lable);
export default App;
