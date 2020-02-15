import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>
                    <div className={s.link}>
                        <NavLink to="/">Dima</NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink to="/">Vasya</NavLink>
                    </div>
                    <div className={s.link}>
                        <NavLink to="/">Petya</NavLink>
                    </div>
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