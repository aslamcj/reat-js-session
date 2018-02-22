import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      title : "Welcome to react"
    }
  }

  changeTitle(t) {
    this.setState({title:t})
  }

  /*
    changeTitle(title) {
      this.setState({title})  // ES6 short cut  if props are same
    }
  */

  render() {
    return (
      <div>
          {/* NEED TO BIND FUNCTIONS WITH THIS PROPERTY, IF NOT FUNCTION WILL REFER TO INOVOKIN SCOPE*/}
          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          <Footer />
      </div>
    )
  }
}

class Header extends Component {

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

    render() {
        return(
          <div>
           <h3>{this.props.title}</h3>
            {/* When binding props proerty to the value need use onChange otherwise keyinput wont work*/}
           <input value={this.props.title} onChange={this.handleChange.bind(this)} />
          </div>
        )
    }
}


class Footer extends Component {
    render() {
        return(
            <h5>Footer content section</h5>
        )
    }
}

export default Layout;
