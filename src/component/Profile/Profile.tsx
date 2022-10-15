import React from "react";
import style from './Profile.module.css'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import {Aside} from "../Aside/Aside";
import {FriendsType} from "../../type/type";



type ProfileType = {
    dataFriend: FriendsType[]
}

export const Profile: React.FC<ProfileType> = ({dataFriend}) => {
    return (
        <div className={style.container}>
            <ProfileHeader/>
            <div className={style.flexWrapper}>
                <ProfilePosts/>
               <Aside dataFriend={dataFriend}/>
            </div>
        </div>
    )
}