import React from "react";
import style from './Header.module.css'
import avatar from '../../img/avatar.jpg'
import icon from '../../img/icon.svg'
import {NavLink} from "react-router-dom";
import {PropsType} from "./HeaderContainer";



export const Header: React.FC<PropsType> = ({auth, isAuth, photo}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <ul className={style.navList}>
                    <li className={style.listItem}>
                        <img className={style.icon} src={icon} alt="icon"/>
                        <a className={style.listLink} href="#">дуровпрости</a>
                    </li>
                    <li className={style.listItem}><input className={style.input} placeholder={'Search'} type="search"/></li>
                    <li className={style.listItem}>
                        {/*<a className={style.listLink} href="#"><img className={style.img} src={avatar} alt="avatar"/></a>*/}
                        {isAuth ? <img src={photo ? photo : avatar} alt="ava"/> : <NavLink to={'/login'}>Login</NavLink>}
                    </li>
                </ul>
            </div>
        </div>
    )
}