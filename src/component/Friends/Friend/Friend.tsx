import React from "react";
import {FriendType} from "./FriendContainer";
import style from './Friend.module.css'
import axios from "axios";
import userPhoto from '../../../img/avatar.jpg'

export const Friend: React.FC<FriendType> = ({users, followUser, setUsers, unfollowUser}) => {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
            setUsers(responce.data.items)
        })
    }

    const friendList = users.map(({id, followed, photos, status, name, uniqueUrlName}) => {
        const onClickFollowHandler = () => {
            followed ? unfollowUser(id) : followUser(id)
        }
        return (
            <li key={id} className={style.listItem}>
                <div className={style.imgBlock}><img className={style.img} src={photos.small !== null ? photos.small : userPhoto} alt={'userPhoto'}/></div>
                <div className={style.text}>{name}</div>
                <div>{followed}</div>
                <button onClick={onClickFollowHandler}>{followed ? 'Unfollowed' : 'Followed'}</button>
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


