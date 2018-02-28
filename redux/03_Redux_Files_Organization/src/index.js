import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* combineReducers is used to combine multiple reducers to one*/
import {combineReducers, createStore} from 'redux';

/* To provide access to store to react */
import {Provider} from 'react-redux';
import productReducer from './reducers/product-reducer';
import customerReducer from './reducers/customer-reducer';



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
            {name: 'IphoneX'},
            {name: 'Galaxy'},
            {name: 'OnePlus'}
        ],
        user : 'Aslam'
    },
    window.devToolsExtension && window.devToolsExtension()
);

class ReduxeApp extends React.Component {
    render() {
    console.log("Store file created");
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}


ReactDOM.render(<ReduxeApp />, document.getElementById('root'));
registerServiceWorker();
