import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post.jsx';

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, what's your name?", countLike: 0 },
    { id: 2, message: "How are you?", countLike: 10 },
    { id: 3, message: "What's your job?", countLike: 7 }
  ]

  let postsElements = posts
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