import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios'
import { followAC, unfollowAC, show_moreCreator, setUsersAC,  setTotalUsersAC, setCurrentPageAC} from '../../redux/users-reducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).
      then(response => {
        this.props.setUsers(response.data);
        // this.props.setTotalUsers(response.data.totalCount);
        this.props.setTotalUsers(100);
      });
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
    return <Users
      users={this.props.users}
      onPageChanged = {this.onPageChanged}
      countTotalUsers = {this.props.countTotalUsers}
      sizePage = {this.props.sizePage}
      currentPage = {this.props.currentPage}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
    />
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);;

