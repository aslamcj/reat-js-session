import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const obj1 = {
    a:1,
    b:2,
    c:3
}

ReactDOM.render(<App prop1="test prop1 string" prop2={100} prop3={obj1} />, document.getElementById('root'));
