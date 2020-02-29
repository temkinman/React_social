import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import MyPosts from './MyPosts'
import { addPostCreator, updatePostCreator } from '../../../redux/profile-reducer';

/*const MyPostsContainer = () => {
=======
import MyPosts from './MyPosts'
import { addPostCreator, updatePostCreator } from '../../../redux/profile-reducer';
// import StoreContext from '../../../storeContext';
import { connect } from 'react-redux';
/*
const MyPostsContainer = () => {
>>>>>>> 126030258d8b9a1f0165512f2284c046f4dd6074
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

<<<<<<< HEAD

=======
>>>>>>> 126030258d8b9a1f0165512f2284c046f4dd6074
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
<<<<<<< HEAD

=======
>>>>>>> 126030258d8b9a1f0165512f2284c046f4dd6074
    updateTextPost: (text) => {
      dispatch(updatePostCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;