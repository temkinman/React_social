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
        <Post message="Hi, what's your name?" countLike='0'/>
        <Post message="How are you?" countLike='20'/>
        <Post message="What's your job?"/>
      </div>
    </div>
  );
}
export default MyPosts;