import React from "react";
import style from "./User.module.css";
import userPhoto from "../../../img/avatar.jpg";
import {UsersType} from "../../../redux/user-reducer";
import {UsersPropsType} from "../../../redux/type/type";
import {v1} from "uuid";
import {NavLink} from "react-router-dom";


export const Users: React.FC<UsersPropsType> = ({users, unfollowUser, followUser, totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    let pages = new Array(Math.ceil(totalUsersCount / pageSize)).fill(null).map((el, i) => {
        return i + 1 < 11 && (
            <>
                    <span onClick={() => onPageChanged(i + 1)}
                          className={currentPage - 1 === i ? style.selected : ''}
                          key={i + 1}>{`${i + 1}    `}</span>
            </>
        )
    })


    const friendList = users.map((user: UsersType) => {
        const onClickFollowHandler = () => {
            user.followed ? unfollowUser(user.id) : followUser(user.id)
        }
        return (
            <li key={user.id} className={style.listItem}>
                <div className={style.imgBlock}>
                    <NavLink to={`/home/ ${user.id}`}><img className={style.img} src={user.photos.small !== null ? user.photos.small : userPhoto}
                            alt={'userPhoto'}/>
                    </NavLink>
                </div>
                <div className={style.text}>{user.name}</div>
                <div>{user.followed}</div>
                <button onClick={onClickFollowHandler}>{user.followed ? 'Unfollowed' : 'Followed'}</button>
            </li>
        )
    })


    return (
        <div key={v1()} className={style.wrapper}>
            <div className={style.container}>
                {pages}
                <span>{`   ... ${Math.ceil(totalUsersCount / pageSize)}`}</span>
                <ul>
                    {friendList}
                </ul>
            </div>
        </div>
    )
}



