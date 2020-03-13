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

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).
      then(response => {
        this.props.setUsers(response.data);
        // this.props.setTotalUsers(response.data.totalCount);
        this.props.setTotalUsers(100);
      });
  }

  render() {
    let totalPages = Math.ceil(this.props.countTotalUsers / this.props.sizePage);
    let pages = [];
    let currentPage = this.props.currentPage;

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    let showButtonLess = () => {
      let lessFlag = 0;
      let less = "<-";

      if (currentPage != 1 && lessFlag === 0) {
        lessFlag = 1;
        return <NavLink to={`/users/${currentPage - 1}`}
          onClick={() => this.onPageChanged(currentPage - 1)}
          className={s.active}>{less}</NavLink>
      }
    }
    let showButtonMore = () => {
      let lessFlag = 0;
      let less = "->";

      if (currentPage != pages.length && lessFlag === 0) {
        lessFlag = 1;
        console.log("showButtonMore");
        return <NavLink to={`/users/${currentPage + 1}`}
          onClick={() => this.onPageChanged(currentPage + 1)}
          className={s.active}>{less}</NavLink>
      }
    }

    // let drawingPageNumbers = (p) => {
    //   let n = p > 4 ? (p - 4) : 1;
    //   for (let i = n; i < pages.length; i++) {
    //     if (p < n || p > pages.length - 4) {
    //       React.createElement(
    //         'NavLink',
    //         {
    //           to: `/users/${p}`,
    //           onClick: () => this.onPageChanged(i),
    //           className: currentPage === p && `${s.active}` > { i }
    //         }
    //       )
    //     }
    //     // if (p == 5) {
    //     //   <span><a href="#">...</a></span>
    //     // }

    //   }
    // }

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
          {showButtonLess()}
          {pages.map((p) => {
            if (p < 5 || p > pages.length - 4) {
              return <NavLink
                to={`/users/${p}`}
                onClick={() => this.onPageChanged(p)}
                className={currentPage === p && `${s.active}`}>{p}
              </NavLink>
            }

            else if (p === 5) {
              return <span><a href="#">...</a></span>
            }
          })}


          {/* {drawingPageNumbers(currentPage)} */}
          {showButtonMore()}
        </div>
        {usersItems}
        <button className={s.show_more} onClick={this.props.showMore}>show more</button>
      </div>
    )
  }
}

export default UsersC;