import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts'
import { addPostCreator, updatePostCreator } from '../../../redux/profile-reducer';

/*const MyPostsContainer = () => {
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
}*/


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