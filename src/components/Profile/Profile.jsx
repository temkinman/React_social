import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Myposts/MyPosts.jsx';

const Profile = () => {
    return (
        <div>
          <div>
            <img src="https://jssorcdn7.azureedge.net/demos/img/gallery/980x380/001.jpg" className={s.top_img}></img>
          </div>
          <div>
            ava + description
          </div>
          <MyPosts/>
        </div>
    );
}
export default Profile;