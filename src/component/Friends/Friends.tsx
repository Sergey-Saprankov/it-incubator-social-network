import React from "react";
import {FriendContainer} from "./Friend/FriendContainer";
import style from './Friends.module.css'

export const Friends = () => {
    return (
        <div className={style.container}>
            <FriendContainer/>
        </div>
    )
}