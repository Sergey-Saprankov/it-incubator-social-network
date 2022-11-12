import React from "react";
import axios from "axios";
import style from "./Friend.module.css";
import userPhoto from "../../../img/avatar.jpg";
import {UsersType} from "../../../redux/user-reducer";
import {FriendType, MapStateFriendProps} from "./FriendContainer";


class FriendClass extends React.Component<FriendType, MapStateFriendProps> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }


    render() {
        const friendList = this.props.users.map((user: UsersType) => {
            const onClickFollowHandler = () => {
                user.followed ? this.props.unfollowUser(user.id) : this.props.followUser(user.id)
            }
            return (
                <li key={user.id} className={style.listItem}>
                    <div className={style.imgBlock}><img className={style.img} src={user.photos.small !== null ? user.photos.small : userPhoto} alt={'userPhoto'}/></div>
                    <div className={style.text}>{user.name}</div>
                    <div>{user.followed}</div>
                    <button onClick={onClickFollowHandler}>{user.followed ? 'Unfollowed' : 'Followed'}</button>
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
}


export default FriendClass;