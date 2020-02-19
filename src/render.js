import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state.js';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root'));
}