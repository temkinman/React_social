import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },

    updateTextMessage: (text) => {
      dispatch(updateMessageCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;