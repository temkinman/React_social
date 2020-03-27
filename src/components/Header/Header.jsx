import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    // debugger
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS57cX2nce4XOU3R7l9JbEXP2h6eW047aMQiO7bI85fSZOVq2kW" alt="img"></img>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login: <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;