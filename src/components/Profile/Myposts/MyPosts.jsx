import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post.jsx';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post message={post.message} countLike={post.countLike} />);
  
  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    
    props.addPost(text); //тут передаем текст напечатанный в наш State, который в (BLL) находится redux.state.js
    props.updateTextPost(''); //передаем наверх в стэйт пустую строку после того как пост был добавлен, чтобы в textarea было пусто
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateTextPost(text);
  }

  return (
    <div className={s.posts_content}>
      My posts
      <div>
        <div>
          <textarea onChange={onPostChange}
                     ref={newPostElement}
                     value={props.newTextPost}
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