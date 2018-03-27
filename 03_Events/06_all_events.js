import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {
      currentEvent : '---'
    }
  }
  update(e) {
    this.setState({currentEvent: e.type});
  }
  render() {
    return (
      <div className="App">
          <textarea
            rows={10}
            cols={20}
            onKeyPress={this.update}
            onCopy={this.update}
            onPaste={this.update}
            onCut={this.update}
            onFocus={this.update}
            onBlur={this.update}
            onDoubleClick={this.update}
            onTouchStart={this.update}
            onTouchEnd={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
            onMouseDown={this.update}
            onMouseEnter={this.update}
            onMouseLeave={this.update}
            onMouseMove={this.update}
            onMouseUp={this.update}
            />

            <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

export default App;
