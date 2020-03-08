import React from 'react';
import s from './UserItem.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/user-avatar.jpg';

const UserItem = (props) => {
  const id = props.id;
  let changefollowed = () => {
    props.folowed ? props.unfollowUser(id) : props.followUser(id);
  }
  return (
    <div className={s.user}>
      <div className={s.userItem}>
        <img src={props.src == null ? userPhoto : props.photos.small} className={s.avatar} />
        <p><b>{props.name}</b></p>
        <button onClick={changefollowed}>{props.folowed ? 'unfollow' : 'follow'}</button>
      </div>
      <div className={s.userInfo}>
          <span className={s.left_top}>{props.name}</span><br/>
          <span className={s.left_bottom}>{props.status}</span>
          <span className={s.right_top}>location.country</span><br/>
          <span className={s.right_bottom}>location.city</span>
      </div>
      {/* <NavLink to={path} activeClassName={s.active}>{props.userName}</NavLink> */}
    </div>
  );
}

export default UserItem;