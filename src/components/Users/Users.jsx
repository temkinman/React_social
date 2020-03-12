import React from 'react';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';

let Users = (props) => {
  // debugger
  let getusers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        console.log(response.data.items);
        props.setUsers(response.data);
      });
    }
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

    let totalPages = Math.ceil(this.props.countTotalUsers / this.props.sizePage);
    let pages=[];

    for (let i=1; i<= totalPages.length; i++){
      pages.push(i);
    }
  return (
    
    <div className={s.container}>
      {/* <div className={s.page}>
        {pages.map( p =>{
          return <span className= {this.props.currentPage === p && s.selectedPage}></span>
        })}
      </div>

      {props.users.length === 0 ?
        <button onClick={getusers}>Get users</button> : ""
      }
      {usersItems}
      <button className={s.show_more} onClick={props.showMore}>show more</button> */}
    </div>
  );
}



export default Users;