import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
    let dialogsData = props.dialogs
        .map(d => <DialogItem userName={d.userName} id={d.id} src={d.src} />);

    let messagesElements = props.messages
        .map(m => <Message message={m.message} />);

    let text = props.newTextMessage;
    let addMessage = () => {
        props.sendMessage();
    }

    let updateTextMessage = (e) => {
        let newtext = e.target.value;
        props.updateTextMessage(newtext);
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