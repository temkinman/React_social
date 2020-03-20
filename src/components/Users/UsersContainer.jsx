import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios'
import { follow, unfollow, show_more, setUsers, setTotalUsers, setCurrentPage, setFetching } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader.js'
import { getUsers } from '../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setFetching(true);
    getUsers(this.props.currentPage).
      then(data => {
        this.props.setUsers(data);
        // this.props.setTotalUsers(response.data.totalCount);
        this.props.setTotalUsers(100);
        this.props.setFetching(false);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.setFetching(true)
    getUsers(this.props.currentPage).
      then(data => {
        this.props.setUsers(data);
        // this.props.setTotalUsers(response.data.totalCount);
        this.props.setFetching(false)
        this.props.setTotalUsers(100);
      });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        countTotalUsers={this.props.countTotalUsers}
        sizePage={this.props.sizePage}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        
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

export default connect(mapStateToProps, { follow, unfollow, show_more, setUsers, setTotalUsers, setCurrentPage, setFetching })(UsersContainer);;

