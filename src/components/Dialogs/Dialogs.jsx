import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>Vasya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.active}>Petya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.active}>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={s.active}>Roma</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>
                    Hi!
                </div>
                <div className={s.dialog}>
                    Hello my friend!
                </div>
                <div className={s.dialog}>
                    Dou you speak English?
                </div>
            </div>
        </div>
    );
}

export default Dialogs;