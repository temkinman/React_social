import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
// import { addPostCreator, updatePostCreator } from '../../../redux/profile-reducer';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    updateTextPost: (text) => {
      dispatch(updatePostCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

