class TodoList extends Component {
  render() {
    this.props = { namesList : ['Amar','Akbar','Antony']  }

    setTimeout(() => {
     this.props = { namesList : ['Ranbir','Shahid','Ranveer']
     }, 9000
    });
    console.log("check prop values after setTimeout",this.props);

    return (
      <div>
        <h1>Names List</h1>
        <ul>
          {
            this.props.namesList.map(function(value){
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
    console.log("check prop values in TodoItem",this.props);
    return (
      <li>{this.props.detail}</li>      
    )
  }
}

export default TodoList;
