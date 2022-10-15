import React from "react";
import style from './Header.module.css'
import avatar from '../../img/avatar.jpg'
import icon from '../../img/icon.svg'

export const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <ul className={style.navList}>
                    <li className={style.listItem}>
                        <img className={style.icon} src={icon} alt="icon"/>
                        <a className={style.listLink} href="#">дуровпрости</a>
                    </li>
                    <li className={style.listItem}><input className={style.input} placeholder={'Search'} type="search"/></li>
                    <li className={style.listItem}><a className={style.listLink} href="#"><img className={style.img} src={avatar} alt="avatar"/></a></li>
                </ul>
            </div>
        </div>
    )
}