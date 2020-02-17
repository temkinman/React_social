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
    let dialogData = [
        {id:1, userName:"Dima"},
        {id:2, userName:"Vasya"},
        {id:3, userName:"Petya"},
        {id:4, userName:"Alex"},
        {id:5, userName:"Roma"},
    ]
    let messageData = [
        {id:1, message:"Hi!"},
        {id:2, message:"Hello my friend!"},
        {id:3, message:"Dou you speak English?"},
        {id:4, message:"Yo"},
        {id:5, message:"Yo"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem userName={dialogData[0].userName} id={dialogData[0].id} />
                <DialogItem userName={dialogData[1].userName} id={dialogData[1].id} />
                <DialogItem userName={dialogData[2].userName} id={dialogData[2].id} />
                <DialogItem userName={dialogData[3].userName} id={dialogData[3].id} />
                <DialogItem userName={dialogData[4].userName} id={dialogData[4].id} />
            </div>
            <div className={s.messages}>
                <Message message={ messageData[0].message } />
                <Message message={ messageData[1].message } />
                <Message message={ messageData[2].message } />
                <Message message={ messageData[3].message } />
                <Message message={ messageData[4].message } />
            </div>
        </div>
    );
}

export default Dialogs;