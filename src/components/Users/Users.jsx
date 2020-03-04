import React from 'react';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem';

let Users = (props) => {
  let usersItems = props.users
    .map(user => <UserItem
      id={user.id}
      userName={user.userName}
      src={user.src}
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
      {/* <p>{usersItems[0].userName}</p> */}
    </div>

  );
}

export default Users;