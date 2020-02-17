import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from './components/Dialogs/Dialogs';

let dialogs = [
    { id: 1, userName: "Dima" },
    { id: 2, userName: "Vasya" },
    { id: 3, userName: "Petya" },
    { id: 4, userName: "Alex" },
    { id: 5, userName: "Roma" },
];

let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hello my friend!" },
    { id: 3, message: "Dou you speak English?" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
];

let posts = [
    { id: 1, message: "Hi, what's your name?", countLike: 0 },
    { id: 2, message: "How are you?", countLike: 10 },
    { id: 3, message: "What's your job?", countLike: 7 }
  ]

ReactDOM.render(<App dialogsData={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
