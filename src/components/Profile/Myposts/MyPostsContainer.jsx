import React from 'react';
import MyPosts from './MyPosts'
import {addPostCreator, updatePostCreator} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  }

  let updateTextPost = (text) => {
    props.store.dispatch(updatePostCreator(text));
  }

  return (
    <MyPosts addPost={addPost}
            updateTextPost={updateTextPost}
            posts={state.profilePage.posts}  />
  );
}

export default MyPostsContainer;