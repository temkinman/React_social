import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialog-reducer';
import StoreContext from '../../storeContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogsPage;
          let dialogs = state.dialogs;
          let messages = state.messages;

          let sendMessage = () => {
            store.dispatch(sendMessageCreator());
          }

          let updateTextMessage = (text) => {
            store.dispatch(updateMessageCreator(text));
          }
          return (
            <Dialogs sendMessage={sendMessage}
              updateTextMessage={updateTextMessage}
              dialogs={dialogs}
              messages={messages}
            />
          )
        }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;