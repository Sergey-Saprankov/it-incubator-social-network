import React from "react";
import style from './ProfileHeader.module.css'
import avatar from '../../../img/avatarBig.jpg'

export const ProfileHeader = () => {
    return (
        <div className={style.container}>
            <div className={style.userBlock}>

                <div className={style.avatarContainer}>
                    <img className={style.avatar} src={avatar} alt="avatar"/>
                </div>
                <div className={style.blockDescription}>
                    <h3 className={style.title}>Сергей Сапранков</h3>
                    <p className={style.description}>Укажите информацию о себе</p>
                </div>

            </div>
        </div>
    )
}