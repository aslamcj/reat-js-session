import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom'

class App extends Component {
  constructor(){
    super();
    this.state = {
      increasing : false
    }
  }
  
  update() {
    ReactDom.render(<App val={this.props.val+1} />, document.getElementById('root'));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({increasing : nextProps.val > this.props.val});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 ===0;
  }

  render() {
    console.log(this.state.increasing);
    return (
      <div>
        <button onClick={this.update.bind(this)}> {this.props.val}</button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prepProps : ${prevProps.val}`);
  }
}

App.defaultProps = {
  val : 0
}



export default App;
