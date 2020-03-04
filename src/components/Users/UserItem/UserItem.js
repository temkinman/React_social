import React from 'react';
import s from './UserItem.module.css';
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
  const name = props.userName;
  let follow =() => {
    props.followUser(name);
  }
  return (
    <div className={s.user}>
      <div className={s.userItem}>
        <img src={props.src} className={s.avatar} />
        <p><b>{props.userName}</b></p>
        <button onClick={follow}>Follow</button>
      </div>
      <div>
        <textarea className={s.userInfo}></textarea>
      </div>
      {/* <NavLink to={path} activeClassName={s.active}>{props.userName}</NavLink> */}
    </div>
  );
}

export default UserItem;