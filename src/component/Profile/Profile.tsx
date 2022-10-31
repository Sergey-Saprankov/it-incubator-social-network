import React from "react";
import style from './Profile.module.css'
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {ProfilePostsContainer} from "./ProfilePosts/ProfilePostsContainer";
import {AsideContainer} from "../Aside/AsideContainer";


export const Profile = () => {
    return (
        <div className={style.container}>
            <ProfileHeader/>
            <div className={style.flexWrapper}>
                <ProfilePostsContainer/>
                <AsideContainer/>
            </div>
        </div>
    )
}