import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    
    return (
        <div className={s.dialog}>
            <img src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/david.png"/>
            <NavLink to={path} activeClassName={s.active}>{props.userName}</NavLink>
        </div>
    );
}

export default DialogItem;