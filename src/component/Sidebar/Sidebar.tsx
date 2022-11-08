import React from "react";
import style from './Sidebar.module.css'
import home from '../../img/home.svg'
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                <li className={style.listItem}>
                    <NavLink to={'/home'} className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Моя страница</span>
                        </div>
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Новости</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <NavLink to={'/dialogs'} className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Муссенджер</span>
                        </div>
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Звонки</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <NavLink to={'/friends'}  className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Друзья</span>
                        </div>
                    </NavLink>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Сообщества</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Фотографии</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Музыка</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Видео</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Клипы</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Игры</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon} src={home} alt=""/>
                            <span>Стикеры</span>
                        </div>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a className={style.listLink} href="#">
                        <div className={style.linkContainer}>
                            <img className={style.icon}  src={home} alt=""/>
                            <span>Маркет</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}