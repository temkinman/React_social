import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState().dialogsPage;
//           let dialogs = state.dialogs;
//           let messages = state.messages;

//           let sendMessage = () => {
//             store.dispatch(sendMessageCreator());
//           }

//           let updateTextMessage = (text) => {
//             store.dispatch(updateMessageCreator(text));
//           }
//           return (
//             <Dialogs sendMessage={sendMessage}
//               updateTextMessage={updateTextMessage}
//               dialogs={dialogs}
//               messages={messages}
//             />
//           )
//         }
//       }
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  let state2 = state.getState().dialogsPage;
  return {
     dialogs: state2.dialogs,
     messages: state2.messages
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