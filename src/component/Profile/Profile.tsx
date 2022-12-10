import React from "react";
import style from './Profile.module.css'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfilePostsContainer} from "./ProfilePosts/ProfilePostsContainer";
import {AsideContainer} from "../Aside/AsideContainer";
import {ProfilePropsType} from "../../redux/type/type";


export const Profile: React.FC<ProfilePropsType> = ({userProfileInfo}) => {
   
    return (
        <div className={style.container}>
            <ProfileHeader userProfileInfo={userProfileInfo}/>
            <div className={style.flexWrapper}>
                <ProfilePostsContainer/>
                <AsideContainer/>
            </div>
        </div>
    )
}