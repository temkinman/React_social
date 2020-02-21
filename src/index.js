import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state.js';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
        addPost={store.addPost.bind(store)} //передаем пропсами функцию добавления поста в Profile/Myposts/Post
        updateTextPost={store.updateTextPost.bind(store)} //передаем пропсами функцию добавления для изменения textarea в посте в Profile/Myposts/Post
    />, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);