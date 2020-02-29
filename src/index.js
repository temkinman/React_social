import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

serviceWorker.unregister();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
