import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

const Heading = () => {
  return <h1>Heading Content</h1>
}

const Greetings = (props) => {
  const {name, age} = props;
  return <h2>User Name: {name} and his Age: {age}</h2>
}

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Greetings  age={30} />
      </div>
    );
  }
}

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}
