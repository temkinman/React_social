import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { updateTextPost, addPost, subscribe } from './redux/state.js';
import * as serviceWorker from './serviceWorker';
import state from './redux/state.js';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
        addPost={addPost} //передаем пропсами функцию добавления поста в Profile/Myposts/Post
        updateTextPost={updateTextPost} //передаем пропсами функцию добавления для изменения textarea в посте в Profile/Myposts/Post
    />, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);