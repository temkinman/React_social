import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post.jsx';
import {addPostCreator, updatePostCreator} from '../../../redux/state';

const MyPosts = (props) => {
  let postsElements = props.posts.posts
    .map(post => <Post message={post.message} countLike={post.countLike} />);
  
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostCreator());
     //тут передаем объект с параметрами в наш State, который в (BLL) находится redux.state.js
  }

  let updateTextPost = () => {
    let text = newPostElement.current.value;
    // let action = {
    //   type: 'UPDATE-TEXT-POST',
    //   text: text
    // }
    props.dispatch(updatePostCreator(text));
  }

  return (
    <div className={s.posts_content}>
      My posts
      <div>
        <div>
          <textarea onChange={updateTextPost}
                     ref={newPostElement}
                     value={props.posts.newTextPost}
                     ></textarea>
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div className="posts">
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;