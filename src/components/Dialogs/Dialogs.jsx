import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { sendMessageCreator, updateMessageCreator } from '../../redux/dialog-reducer';

const Dialogs = (props) => {
    let dialogsData = props.state.dialogs
        .map(d => <DialogItem userName={d.userName} id={d.id} src={d.src} />);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />);

    /* my version    
    let newMessageElement = React.createRef();
    
    let addMessage = () => {
      props.dispatch(sendMessageCreator());  
    }  
    
    let updateTextMessage = () => {
      let newtext = newMessageElement.current.value;
      props.dispatch(updateMessageCreator(newtext));
    }
    */

    //Dymich version
    let text = props.state.newTextMessage;
    let addMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    let updateTextMessage = (e) => {
        let newtext = e.target.value;
        props.dispatch(updateMessageCreator(newtext));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
            </div>
            <div>
                <textarea className={s.addMessage}
                    //ref={newMessageElement} belons to my version
                    placeholder= "Enter your message"
                    onChange={updateTextMessage}
                    value={text}  ></textarea>
                <div>
                    <button className={s.btn + " " + s.mybtn}
                        onClick={addMessage}
                    >send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;