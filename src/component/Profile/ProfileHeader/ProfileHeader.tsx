import React from "react";
import style from './ProfileHeader.module.css'
import avatar from '../../../img/avatarBig.jpg'
import {ProfilePropsType} from "../../../redux/type/type";
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileHeader: React.FC<ProfilePropsType> = ({userProfileInfo}) => {
    if (!userProfileInfo) {
        return <Preloader/>
    }
    return  (
        <div className={style.container}>
            <div className={style.userBlock}>

                <div className={style.avatarContainer}>
                    <img className={style.avatar} src={userProfileInfo.photos.large} alt="avatar"/>
                </div>
                <div className={style.blockDescription}>
                    <h3 className={style.title}>{userProfileInfo.fullName}</h3>
                    <p className={style.description}>{userProfileInfo.aboutMe}</p>
                </div>

            </div>
        </div>
    )
}