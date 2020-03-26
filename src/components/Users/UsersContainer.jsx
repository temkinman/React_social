import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { show_more, getUsers, userFollow, userUnfollow } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader.js'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber);
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
        follow={this.props.userFollow}
        unfollow={this.props.userUnfollow}
        isFetching={this.props.isFetching}
        userIdFollow={this.props.userIdFollow}
        followingProgress={this.props.followingProgress}
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
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
    userIdFollow: state.usersPage.userIdFollow
  }
}

export default connect(mapStateToProps, { show_more, getUsers, userFollow, userUnfollow })(UsersContainer);

