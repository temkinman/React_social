import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="https://jssorcdn7.azureedge.net/demos/img/gallery/980x380/001.jpg" className={s.top_img} alt="img"></img>
      </div>
      <div className={s.description}>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <div>
        <h3>contacts:</h3>
        <ul className={s.contacts}>
          <li><span>facebook: </span><a href="#">{props.profile.contacts.facebook}</a></li>
          <li><span>vk: </span><a href="#">{props.profile.contacts.vk}</a></li>
          <li><span>twitter: </span><a href="#">{props.profile.contacts.twitter}</a></li>
          <li><span>instagram: </span><a href="#">{props.profile.contacts.instagram}</a></li>
          <li><span>github: </span><a href="#">{props.profile.contacts.github}</a></li>
        </ul>
      </div>

    </div>
  );
}
export default ProfileInfo;