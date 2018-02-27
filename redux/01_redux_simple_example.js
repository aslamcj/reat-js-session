import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'

function reducer(state, action) {
    console.log(action);
    if(action.type === 'changeState') {
        return action.payLoad.newState;
    }    
    return 'State';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
    type: 'changeState',
    payLoad: {
        newState: 'new state'
    },
    payLoad2: {
        newState: 'new state'
    }
}
const action2 = {
    type: 'changeState2',
    payLoad: {
        newState: 'new state2'
    },
    payLoad2: {
        newState: 'new state2'
    }
}

store.dispatch(action);
store.dispatch(action2);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
