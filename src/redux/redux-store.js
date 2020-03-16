import {createStore, combineReducers} from 'redux';
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import userReducer from './users-reducer'

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: userReducer,
    sidebar: sidebarReducer
}
)

let store = createStore(reducers);

window.store = store;

export default store;