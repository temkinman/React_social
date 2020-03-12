import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import UsersC from './UsersC'
import { followAC, unfollowAC, show_moreCreator, setUsersAC,  setTotalUsersAC, setCurrentPageAC} from '../../redux/users-reducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    countTotalUsers: state.usersPage.countTotalUsers,
    currentPage: state.usersPage.currentPage,
    sizePage: state.usersPage.sizePage
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
    },
    setTotalUsers: (number) => {
      dispatch(setTotalUsersAC(number));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    }
    

  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;

