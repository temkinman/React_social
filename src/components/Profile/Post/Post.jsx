import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-768x519.jpg" className={s.avatar}></img>
      Post
      <div>
        <span>like</span>
      </div>
    </div>
  );
}
export default Post;