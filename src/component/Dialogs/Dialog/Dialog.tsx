import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {MapStateDialogToPropsType} from "./DialogContainer";


export const Dialog: React.FC<MapStateDialogToPropsType> = ({dialogsPage}) => {
    const dialogList = dialogsPage.map(({id, src, alt, title, description}, i) => {
        return (
            <li key={id} className={style.item}>
                <NavLink to={`/dialogs/${i + 1}`} href="">
                    <div className={style.flexWrapper}>
                        <div>
                            <img className={style.img}
                                 src={src}
                                 alt={alt}/>
                        </div>
                        <div className={style.textWrapper}>
                            <div className={style.title}>{title}</div>
                            <p className={style.description}>{description}</p>
                        </div>
                    </div>
                </NavLink>
            </li>
        )
    })
    return (
        <ul className={style.items}>
            {dialogList}
        </ul>
    )
}