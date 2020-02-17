import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post.jsx';

const MyPosts = () => {
  let messageData = [
    {id:1, message:"Hi, what's your name?", countLike: 0},
    {id:2, message:"How are you?", countLike: 10},
    {id:3, message:"What's your job?", countLike: 7}
] 
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
        <Post message={messageData[0].message} countLike= {messageData[0].countLike} />
        <Post message={messageData[1].message} countLike= {messageData[1].countLike} />
        <Post message={messageData[2].message} countLike= {messageData[2].countLike} />
      </div>
    </div>
  );
}
export default MyPosts;