import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx'

const Dialogs = () => {
    let dialogs = [
        { id: 1, userName: "Dima" },
        { id: 2, userName: "Vasya" },
        { id: 3, userName: "Petya" },
        { id: 4, userName: "Alex" },
        { id: 5, userName: "Roma" },
    ]
    let messages = [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Hello my friend!" },
        { id: 3, message: "Dou you speak English?" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
    ]

    let dialogsData = dialogs
        .map( dialog => <DialogItem userName={dialog.userName} id={dialog.id} /> );

    let messagesElements = messages
        .map( message => <Message message={message.message} /> );

    return (
        <div className={s.dialogs}>
            
            <div className={s.dialogs_items}>
                { dialogsData }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;