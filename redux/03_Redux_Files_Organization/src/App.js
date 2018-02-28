import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {updateUser} from './actions/customer-action';
import {updateProducts} from './actions/products-action';

 
class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onUpdateProductList = this.onUpdateProductList.bind(this);
  }

  onUpdateUser(e) {
    this.props.onUpdateUserX(e.target.value);
  }

  onUpdateProductList(){
    this.props.onUpdateProductListX([
            {name: '2018 IphoneX'},
            {name: '2018 Galaxy'},
            {name: '2018 OnePlus'},
            {name: '2018 Nokia'},
    ]);
  }
  render() {
    console.log("This props from TodoItem",this.props);
    
    return(
      <ul>
        <li>
           <h1>Redux Notes</h1>
           <input type="text" onChange={this.onUpdateUser} />
           <br/>
           <br/>
           User Details : {this.props.user}
           <br/>
           <h2>update product details</h2>
           <button onClick={this.onUpdateProductList}>Click to the get updated list of product details</button>

           {this.props.products.map(function(m){
             return <p>{m.name}</p>
           })}
            
        </li>
      </ul>
    );
    
  }
}

// to pass only specific objects from redux
const mapStateToProps = (state) => ({
  products : state.products,
  user: state.user
});

// to initiate or pass action to the dispatch function
const mapActionsToProps = {
  onUpdateUserX : updateUser,
  onUpdateProductListX : updateProducts
};


export default connect(mapStateToProps, mapActionsToProps)(TodoItem);