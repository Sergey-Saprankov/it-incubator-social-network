import React from "react";
import style from './Profile.module.css'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import {Aside} from "../Aside/Aside";
import {FriendsType, PostDataPageType} from "../../type/type";


type ProfileType = {
    dataFriend: FriendsType[]
    postDataPage: PostDataPageType
    addPost: (text: string) => void
}

export const Profile: React.FC<ProfileType> = ({dataFriend, postDataPage, addPost}) => {
    return (
        <div className={style.container}>
            <ProfileHeader/>
            <div className={style.flexWrapper}>
                <ProfilePosts addPost={addPost} postDataPage={postDataPage}/>
               <Aside dataFriend={dataFriend}/>
            </div>
        </div>
    )
}