import React from 'react';
import s from './Post.module.css';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-768x519.jpg" className={s.avatar} alt="img"></img>
      {props.message}
      <div>
        <span>like</span> { props.countLike }
      </div>
    </div>
  );
}
export default Post;