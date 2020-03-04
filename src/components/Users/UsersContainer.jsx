import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import { followUserCreator, show_moreCreator } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (name) => {
      dispatch(followUserCreator(name));
    },
    showMore: () => {
      dispatch(show_moreCreator());
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

