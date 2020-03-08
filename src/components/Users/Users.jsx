import React from 'react';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';

let Users = (props) => {
  // debugger
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
      console.log(response.data.items);
      props.setUsers(response.data);
    });
  }

  let usersItems = props.users
    .map(user => <UserItem
      id={user.id}
      name={user.name}
      photos={user.photos}
      location={user.location}
      key={user.id}
      status={user.status}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
      folowed={user.folowed}
    />);
  return (
    <div className={s.container}>
      {usersItems}
      <button className={s.show_more} onClick={props.showMore}>show more</button>
    </div>
  );
}



export default Users;