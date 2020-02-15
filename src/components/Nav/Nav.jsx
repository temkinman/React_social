import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <a href="/profile">Profile</a>
        </div>
        <div >
          <a href="/dialogs" className={ `${s.item} ${s.active}` }>Messages</a>
        </div>
        <div className={s.item}>
          <a href="/news">News</a>
        </div>
        <div className={s.item}>
          <a href="/music">Music</a>
        </div>
        <div className={s.item}>
          <a href="/settings">Settings</a>
        </div>
      </nav>
    );
}

export default Nav;