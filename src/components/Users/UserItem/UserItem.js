import React from 'react';
import s from './UserItem.module.css';
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
  const id = props.id;
  let changefollowed = () => {
    props.folowed ? props.unfollowUser(id) : props.followUser(id);
  }
  return (
    <div className={s.user}>
      <div className={s.userItem}>
        <img src={props.src} className={s.avatar} />
        <p><b>{props.userName}</b></p>
        <button onClick={changefollowed}>{props.folowed ? 'unfollow' : 'follow'}</button>
      </div>
      <div className={s.userInfo}>
        <div>
          <span>{props.userName}</span><br/>
          <span>{props.status}</span>
        </div>
        <div>
          <span>{props.location.country}</span><br/>
          <span>{props.location.city}</span>
        </div>

      </div>
      {/* <NavLink to={path} activeClassName={s.active}>{props.userName}</NavLink> */}
    </div>
  );
}

export default UserItem;