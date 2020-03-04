import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import { followAC, unfollowAC, show_moreCreator, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followAC(userId));
    },
    unfollowUser: (userId)=>{
      dispatch(unfollowAC(userId));
    },
    showMore: () => {
      dispatch(show_moreCreator());
    },
    setUsers: (users) =>{
       dispatch(setUsersAC(users));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

