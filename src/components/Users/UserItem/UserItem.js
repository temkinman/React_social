import React from 'react';
import s from './UserItem.module.css';
import userPhoto from '../../../assets/images/user-avatar.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

//Для тех, кто столкнулся с ошибкой 401: для начала проверьте, зарегистрированы ли вы на сайте,


//далее проверьте, каким по счёту параметром вы передаёте объект с withCredentials и headers.. 
//У GET и DELETE - это должно передаваться 2-ым параметром, у POST - 3-тьим. Иногда бывает так,
// что сервер с API тупит, отдаёт ответ по 40 секунд, тут только ждать. Димычу спасибо)) Самый лучший препод)

const UserItem = (props) => {
  const id = props.id;
 
  let changefollowed = () => {
    if(props.followed){
      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
          "API-KEY" : "7f332eb3-f02c-470f-9798-2fd2a0f07f96"
        }
      }).
      then(response => {
        if(response.data.resultCode === 0){
          props.unfollow(id)
        }
      });

    } else{
      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
          "API-KEY" : "7f332eb3-f02c-470f-9798-2fd2a0f07f96"
        }
      }).
      then(response => {
        if(response.data.resultCode === 0){
          console.log("response = OK ELSE")
          props.follow(id)
        }
      });
    }  
  }
  return (
    <div className={s.user}>
      <div className={s.userItem}>
        <NavLink to={'/profile/' + id}>
          <img src={props.src == null ? userPhoto : props.photos.small} className={s.avatar} />
        </NavLink>
        <p><b>{props.name}</b></p>
        <button onClick={changefollowed}>{props.followed ? 'unfollow' : 'follow'}</button>
      </div>
      <div className={s.userInfo}>
        <span className={s.left_top}>{props.name}</span><br />
        <span className={s.left_bottom}>{props.status}</span>
        <span className={s.right_top}>location.country</span><br />
        <span className={s.right_bottom}>location.city</span>
      </div>
      {/* <NavLink to={path} activeClassName={s.active}>{props.userName}</NavLink> */}
    </div>
  );
}

export default UserItem;