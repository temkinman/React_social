import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, what's your name?", countLike: 0 },
                { id: 2, message: "How are you?", countLike: 10 },
                { id: 3, message: "What's your job?", countLike: 7 }
            ],
            newTextPost: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, userName: "Dima", src: "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/david.png" },
                { id: 2, userName: "Vasya", src: "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" },
                { id: 3, userName: "Petya", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQu2cza9liEWFa0WtQyPhbR1VOsvqGZpfntATqvSXXXo7swxco&s" },
                { id: 4, userName: "Alex", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVUSXuYTRN02SB4TLt-uQ5Kb-Rj7guE9uo4luZQmLw7wGrU2pZQ&s" },
                { id: 5, userName: "Roma", src: "https://images.vector-images.com/clipart/xl/176/arab5.jpg" },
                { id: 6, userName: "XXX", src: "https://images.vector-images.com/clipart/xl/176/arab5.jpg" }
            ],
            messages: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "Hello my friend!" },
                { id: 3, message: "Dou you speak English?" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" }
            ],
            newTextMessage: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed!");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    //метод для управления методами store 
    dispatch(action) {
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);
    }
}






export default store;

window.store = store;  //глобально обращаемся к store

/*export const addPost = () => {


}*/
