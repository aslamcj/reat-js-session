import React, { Component } from 'react';
import './App.css';


// Creating Stateless functional components
/*
  * Usage of stateless functional component
  * If any compnenet which doesnt maintating any state then we can use stateless functions 
  * instead of Reat Class components
*/

class TodoList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tasks : [
            {
              name: "daily task1 ",
              completed: false
            },
            {
              name: "daily task2 ",
              completed: true
            },
            {
              name: "daily task3 ",
              completed: false
            },
            {
              name: "daily task4 ",
              completed: false
            }
        ],
        currentTask : ''
      };
    this.changeStatus = this.changeStatus.bind(this); 
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);  
  }
  changeStatus(index) {
    //console.log(this.state.tasks[index]);
    console.log("click handler", index);
    var tasks = this.state.tasks;
    var t = tasks[index];
    t.completed = !t.completed;
    console.log(tasks);
    this.setState({
      tasks:tasks
    });
  }

  updateTask(e) {
    this.setState({
      currentTask : e.target.value
    });
  }
  addTask(e) {
    e.preventDefault();
    var tasks = this.state.tasks;
    var newTask = this.state.currentTask
    tasks.push({
      name: newTask,
      completed : false
    });

    this.setState({
      tasks: tasks,
      currentTask: ''
    });

  }
    render() {
        return (
          <section>
            <h1> To Do List </h1>
            <TodoForm currentTask={this.state.currentTask} updateT= {this.updateTask} addTask={this.addTask}/>
            <ul>
                {
                  this.state.tasks.map((t,i) => {
                      return <TodoItem key={t.name} details={t} clickHandler={this.changeStatus} index={i}/>
                  })
                }
            </ul>
          </section>
        );
    }
}

const TodoForm = function(props){
  return(
    <form onSubmit={props.addTask}>
        <input type="text" value={props.currentTask} onChange={props.updateT} />
        <button type="submit">Add Task </button>
    </form>
  );
}
// ** Define Stateless Functional Component methods 1
const TodoItem = function(props){
  return (
    <li className={props.details.completed?'completed':''} 
      onClick={ () =>   {
          props.clickHandler(props.index)
          }
      }>
        Task Name: {props.details.name}
    </li>
  );
}

// ** Using through Class component

// class TodoItem extends React.Component {
//   render() {
//     return(
//         <li className={this.props.details.completed?'completed':''} onClick={
//             () =>   {this.props.clickHandler(this.props.index)
//           }
//           } >
//             {this.props.details.name}
//         </li>
//     );
//   }
// }

export default TodoList;
