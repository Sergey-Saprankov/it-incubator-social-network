import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogTypeProps = {
    id: string
    src: string
    alt: string
    title: string
    description: string
    link: number
}

export const Dialog: React.FC<DialogTypeProps> = ({id, src, alt, title, description, link}) => {
    return (
        <li key={id} className={style.item}>
            <NavLink to={`/dialogs/${link}`} href="">
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
}