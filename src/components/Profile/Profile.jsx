import React from 'react';
import s from './Profile.module.css';
import MyPosts from './Myposts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    return (
        <div>
          <ProfileInfo />
          <MyPosts posts={props.state.posts} />
        </div>
    );
}
export default Profile;