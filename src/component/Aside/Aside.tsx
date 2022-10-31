import React from "react";
import style from './Aside.module.css'
import {FriendsType} from "../../redux/type/type";
import {MapStateToPropsType} from "./AsideContainer";


export const Aside: React.FC<MapStateToPropsType> = ({friendsData}) => {
    const friendList = friendsData.map(({id, src, alt, title}) => {
        return (
            <li key={id} className={style.listItem}>
                <div className={style.imgBlock}><img className={style.img} src={src} alt={alt}/></div>
                <div className={style.text}>{title}</div>
            </li>
        )
    })
    return (
        <aside className={style.container}>
            <h4 className={style.title}>Друзья онлайн</h4>
            <ul className={style.listItems}>
                {friendList}
            </ul>
        </aside>
    )
}