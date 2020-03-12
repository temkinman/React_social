import React from 'react';
import s from './Users.module.css';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';

class UsersC extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).
      then(response => {
        this.props.setUsers(response.data);
        // this.props.setTotalUsers(response.data.totalCount);
        this.props.setTotalUsers(100);

      });
    console.log('componentDidMount ' + this.props.currentPage);
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    // let x = this.props;
    // console.log(e);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}`).
      then(response => {
        this.props.setUsers(response.data);
        // this.props.setTotalUsers(response.data.totalCount);
        this.props.setTotalUsers(100);

      });
  }


  render() {
    let totalPages = Math.ceil(this.props.countTotalUsers / this.props.sizePage);
    let pages = [];
    let n = pages.length;

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    let usersItems = this.props.users
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



    return (
      <div className={s.container}>
        {/* <button onClick={this.getusers}>Get users</button> */}
        <div className={s.page}>
          {pages.map(p => {
            if (p < 5 || p > pages.length - 4) {
              return <NavLink
                to={`/users/${p}`}
                onClick={() => this.onPageChanged(p)}
                className={this.props.currentPage === p && `${s.active}`}>{p}
              </NavLink>
            }
            else if (p === 5) {
              return <span><a href="#">...</a></span>
            }
          })}
        </div>
        {usersItems}
        <button className={s.show_more} onClick={this.props.showMore}>show more</button>
      </div>
    )
  }
}

export default UsersC;