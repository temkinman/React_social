import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state.js';
import { updateTextPost } from './redux/state.js';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
        addPost={addPost} //передаем пропсами функцию добавления поста в Profile/Myposts/Post
        updateTextPost={updateTextPost} //передаем пропсами функцию добавления для изменения textarea в посте в Profile/Myposts/Post
    />, document.getElementById('root'));
}