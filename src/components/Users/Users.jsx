import React from 'react'
import s from './Users.module.css'
import UserItem from './UserItem/UserItem'
import { NavLink } from 'react-router-dom';


const Users = (props) => {


  let totalPages = Math.ceil(props.countTotalUsers / props.sizePage);
  let pages = [];
  let currentPage = props.currentPage;

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  let usersItems = props.users
    .map(user => <UserItem
      id={user.id}
      name={user.name}
      photos={user.photos}
      location={user.location}
      key={user.id}
      status={user.status}
      follow={props.follow}
      unfollow={props.unfollow}
      followed={user.followed}
      followingProgress={props.followingProgress}
      userIdFollow={props.userIdFollow}
    />);

  // let x = 0;

  return (
    <div className={s.container}>
      <div className={s.page}>
        {pages.map((p) => {
          return (p % 40 === 0) ?
          <>
              <NavLink
                to={`/users/${p}`}
                onClick={() => props.onPageChanged(p)}
                className={currentPage === p && `${s.active}`}>{p}
              </NavLink>{<br/>}
           </>
             :
            <NavLink
              to={`/users/${p}`}
              onClick={() => props.onPageChanged(p)}
              className={currentPage === p && `${s.active}`}>{p}
            </NavLink>
        }
        )}
      </div>
      {usersItems}
      {/* <button className={s.show_more} onClick={this.props.showMore}>show more</button> */}
    </div>
  );
}

export default Users;