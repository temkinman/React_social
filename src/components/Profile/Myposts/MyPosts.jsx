import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post.jsx';

const MyPosts = () => {
  return (
    <div className={s.posts_content}>
      My posts
      <div>
        <textarea></textarea>
        <button>add post</button>
        <button>remove</button>
      </div>
      <div className="posts">
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}
export default MyPosts;