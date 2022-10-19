import React from "react";
import style from './Profile.module.css'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import {Aside} from "../Aside/Aside";
import {
    ActionType,
    AddNewPostTextActionType,
    AddPostActionType,
    FriendsType,
    PostDataPageType
} from "../../redux/state";


type ProfileType = {
    dataFriend: FriendsType[]
    postDataPage: PostDataPageType
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfileType> = ({dataFriend, postDataPage, dispatch}) => {
    return (
        <div className={style.container}>
            <ProfileHeader/>
            <div className={style.flexWrapper}>
                <ProfilePosts dispatch={dispatch}  postDataPage={postDataPage}/>
                <Aside dataFriend={dataFriend}/>
            </div>
        </div>
    )
}