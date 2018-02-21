class Layout extends Component {
 constructor() {
    super();
    this.state = {
      title: "Welcome"
    }
  }

  render() {
    setTimeout(() => {
      this.setState({title: "Welcome Again"}), 90000
    })
    return (
      <div>
        <Header title={this.state.title}/>
        <Header title="Static Welcome Message" msg="new message" />
        <Header title="Another Static Welcome Message"> Hello</Header>
      </div>
    )
 } 
}

class Header extends Component {
  render() {
    return (
      <Title title={this.props.title} />
      {/* Text between tags can be accessed through this.props.children property */}      
    )
  }
}
class Title extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}
