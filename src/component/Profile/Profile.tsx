import React from "react";
import style from './Profile.module.css'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import {Aside} from "../Aside/Aside";
import {FriendsType, PostDataPageType} from "../../redux/state";


type ProfileType = {
    dataFriend: FriendsType[]
    postDataPage: PostDataPageType
    addPost: (text: string) => void
    addNewPostText: (text: string) => void
}

export const Profile: React.FC<ProfileType> = ({dataFriend, postDataPage, addPost, addNewPostText}) => {
    return (
        <div className={style.container}>
            <ProfileHeader/>
            <div className={style.flexWrapper}>
                <ProfilePosts addNewPostText={addNewPostText} addPost={addPost} postDataPage={postDataPage}/>
                <Aside dataFriend={dataFriend}/>
            </div>
        </div>
    )
}