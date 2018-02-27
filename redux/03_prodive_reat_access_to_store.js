import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* combineReducers is used to combine multiple reducers to one*/
import {combineReducers, createStore} from 'redux';

/* To provide access to store to react */
import {Provider} from 'react-redux';



function productReducer(state=[], action) {
    return state;
}

function customerReducer(state='', action) {
    switch (action.type){
        case 'updateUser':
            return action.payLoad;
        default:
        return state;
    }   
}

/*
// ES6 way

function customerReducer(state='', {type, payLoad}) {
    switch (type){
        case 'updateUser':
            return payLoad;
        default:
        return state;
    }   
}

*/


/* Combining two states into one state*/
const allReducers = combineReducers({
    products : productReducer,
    user : customerReducer
});
/* 
    Passing reducer to store
    createStore takes two parameters
    1. parameter is passing reducer object
    2. setting default values to the store
*/

const store = createStore(
    allReducers,
    {
        products : [
            {name: 'iphone'},
            {name: 'galaxy'},
            {name: 'oneplus'}
        ],
        user : 'Aslam'
    },
    window.devToolsExtension && window.devToolsExtension()
);

/* To Get current state resutls with default store values */
console.log(store.getState());

const updateUserAction = {
    type: 'updateUser',
    payLoad : {
        user: 'Zahid'
    }
}

/* disptach function used to update current data */
store.dispatch(updateUserAction)

/* To Get after update/dispatch state resutls in store values */
console.log(store.getState());

// Provider/Redux state passed to component
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
