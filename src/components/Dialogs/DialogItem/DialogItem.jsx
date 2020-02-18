import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom'; 

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img src={props.src}/>
            <NavLink to={path} activeClassName={s.active}>{props.userName}</NavLink>
        </div>
    );
}

export default DialogItem;