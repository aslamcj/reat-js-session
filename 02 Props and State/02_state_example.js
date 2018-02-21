import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoList extends Component {
 constructor() {
    super();
    this.state = {
      namesList : ['Amar','Akbar','Antony']
    }
  }

  render() {
    setTimeout(() => {
      this.setState({namesList : ['Ranbir','Shahid','Ranveer']}), 90000
    })
    return (
      <div>
        <h1>Names List</h1>
        <ul>
          {
            this.state.namesList.map(function(value){
               return <TodoItem detail={value} />
            })        
           }         
        </ul>
        <footer>
          <h5>This is footer content</h5>
        </footer>
      </div>
    )
 } 
}

class TodoItem extends Component {
  render() {
    return (
      <li>{this.props.detail}</li>      
    )
  }
}

export default TodoList;
