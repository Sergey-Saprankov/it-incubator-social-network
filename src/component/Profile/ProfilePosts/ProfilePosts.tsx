import React from "react";
import style from './ProfilePosts.module.css'
import {log} from "util";

export const ProfilePosts = () => {
    return (
        <div className={style.container}>
            <textarea className={style.textarea} placeholder={'Что у вас нового ?'}></textarea>
            <button>Отправить</button>
        </div>
    )
}