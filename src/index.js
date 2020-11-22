import React from 'react';
import ReactDOM from 'react-dom';
import {setBasepath} from "hookrouter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// setBasepath('localhost:3000');
setBasepath('https://slyness98.github.io/portfolio');

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
