import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './Myposts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
    
    return (
        <div>
          <ProfileInfo />
          <MyPostsContainer store = {props.store} 
                   />
        </div>
    );
}
export default Profile;