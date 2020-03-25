import {createStore, combineReducers, applyMiddleware} from 'redux';
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import userReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: userReducer,
    sidebar: sidebarReducer,
    auth: authReducer
}
)

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;