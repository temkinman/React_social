const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const dialogReducer = (state, action) => {
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