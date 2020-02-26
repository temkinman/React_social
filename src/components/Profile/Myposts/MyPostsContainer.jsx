import React from 'react';
import MyPosts from './MyPosts'
import { addPostCreator, updatePostCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer> 
      {
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostCreator());
        }

        let updateTextPost = (text) => {
          store.dispatch(updatePostCreator(text));
        }
        return <MyPosts addPost={addPost}
          updateTextPost={updateTextPost}
          posts={state.profilePage} />
      }
    }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;