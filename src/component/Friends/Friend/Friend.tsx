import React from "react";
import {MapStateFriendProps} from "./FriendContainer";
import style from './Friend.module.css'

export const Friend: React.FC<MapStateFriendProps> = ({dataFriend}) => {
    const friendList = dataFriend.map(({id, src, alt, title}) => {
        return (
            <li key={id} className={style.listItem}>
                <div className={style.imgBlock}><img className={style.img} src={src} alt={alt}/></div>
                <div className={style.text}>{title}</div>
            </li>
        )
    })
    return (
        <div className={style.container}>
            <ul>
                {friendList}
            </ul>
        </div>
    )
}