import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom'

class App extends Component {
  constructor() {
    super();
    console.log("1. App Component Constructor Method");
    this.state = {
      val: 0
    }
  }
  update() {
    this.setState({
      val: this.state.val + 1
    })
  }
  componentWillMount() {
    console.log("2. App Component componentWillMount Method");
    /*
      componentWillMount - will have access to prop and state 
      it won't have access to dom elements
      */
    this.setState({m:2});
  }
  render() {
    console.log("3. App Component Render Method");
    return (
      <div className="App">
        <button onClick={this.update.bind(this)}>
            {this.state.val * this.state.m}
        </button>
      </div>
    )
  }
  componentDidMount() {
    console.log("4. App Component componentDidMount Method");
   // console.log(ReactDom.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }
  componentWillUnmount() {
    console.log("5. App Component componentWillUnmount Method");
    clearInterval(this.inc);
  }
}


class Wrapper extends Component {
  onmount() {
    ReactDom.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDom.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.onmount.bind(this)}>Mount </button>
        <button onClick={this.unmount.bind(this)}>UnMount </button>
        <div id="a"></div> 
      </div>
    );
  }
}


export default Wrapper;
