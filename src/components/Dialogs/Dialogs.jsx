import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.userName}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem userName="Dima" id="1" />
                <DialogItem userName="Vasya" id="2" />
                <DialogItem userName="Petya" id="3" />
                <DialogItem userName="Alex" id="4" />
                <DialogItem userName="Roma" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hi!" />
                <Message message="Hello my friend!" />
                <Message message="Dou you speak English?" />
            </div>
        </div>
    );
}

export default Dialogs;