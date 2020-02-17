import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
          <div>
            <img src="https://jssorcdn7.azureedge.net/demos/img/gallery/980x380/001.jpg" className={s.top_img} alt="img"></img>
          </div>
          <div className={s.description}>
            ava + description
          </div>
        </div>
    );
}
export default ProfileInfo;