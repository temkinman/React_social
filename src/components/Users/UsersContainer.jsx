import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios'
import { followAC, unfollowAC, show_moreCreator, setUsersAC, setTotalUsersAC, setCurrentPageAC, setFetchingAC } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader.js'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).
      then(response => {
        this.props.setUsers(response.data);
        // this.props.setTotalUsers(response.data.totalCount);
        this.props.setTotalUsers(100);
        this.props.setFetching(false);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.setFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).
      then(response => {
        this.props.setUsers(response.data);
        // this.props.setTotalUsers(response.data.totalCount);
        this.props.setFetching(false)
        this.props.setTotalUsers(100);
      });

    console.log("final isFetching " + this.props.isFetching)
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        countTotalUsers={this.props.countTotalUsers}
        sizePage={this.props.sizePage}
        currentPage={this.props.currentPage}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    countTotalUsers: state.usersPage.countTotalUsers,
    currentPage: state.usersPage.currentPage,
    sizePage: state.usersPage.sizePage,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followAC(userId));
    },
    unfollowUser: (userId) => {
      dispatch(unfollowAC(userId));
    },
    showMore: () => {
      dispatch(show_moreCreator());
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalUsers: (number) => {
      dispatch(setTotalUsersAC(number));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setFetching: (isFetching) => {
      dispatch(setFetchingAC(isFetching));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);;

