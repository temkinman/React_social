import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialog-reducer';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogs = state.dialogs;
    let messages = state.messages;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let updateTextMessage = (text) => {
        props.store.dispatch(updateMessageCreator(text));
    }

    return (
        <Dialogs sendMessage={sendMessage}
                updateTextMessage={updateTextMessage}
                dialogs={dialogs}
                messages={messages}
        />
    );
}

export default DialogsContainer;