import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx'

const Dialogs = (props) => {
    let dialogsData = props.state.dialogs
        .map( d => <DialogItem userName={d.userName} id={d.id} />);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsData}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;