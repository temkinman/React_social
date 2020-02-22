const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newTextMessage
            }
            state.messages.push(newMessage);
            state.newTextMessage = '';
            return state;
        case UPDATE_TEXT_MESSAGE:
            state.newTextMessage = action.newTextMessage;
            return state;
        default: return state;
    }

}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageCreator = (text) => {
    return {
        type: UPDATE_TEXT_MESSAGE,
        newTextMessage: text
    }
}
export default dialogReducer;