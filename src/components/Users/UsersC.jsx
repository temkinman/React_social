import React from 'react';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';

class UsersC extends React.Component {
  usersItems = this.props.users
    .map(user => <UserItem
      id={user.id}
      name={user.name}
      photos={user.photos}
      location={user.location}
      key={user.id}
      status={user.status}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      folowed={user.folowed}
    />);

  getusers = () => {
    alert('Send get request to server');

    axios.get('https://social-network.samuraijs.com/api/1.0/users').
      then(response => {
        this.props.setUsers(response.data);
      });
  }
  render() {
    return (
      <div className={s.container}>
        <button onClick={this.getusers}>Get users</button>
        {this.usersItems}
        <button className={s.show_more} onClick={this.props.showMore}>show more</button>
      </div>
    )
  }
}

export default UsersC;