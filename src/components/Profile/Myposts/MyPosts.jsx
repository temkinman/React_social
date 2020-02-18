import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post.jsx';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post message={post.message} countLike={post.countLike} />);

  return (
    <div className={s.posts_content}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className="posts">
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;