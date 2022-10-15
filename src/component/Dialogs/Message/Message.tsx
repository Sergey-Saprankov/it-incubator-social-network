import React from "react";
import style from "./Message.module.css";
import {MessagePageType} from "../../../type/type";

type MessageType = {
    messagesPage: MessagePageType
}

export const Message:React.FC<MessageType> = ({messagesPage}) => {
    const messageList = messagesPage.messages.map(({id, src, title, description, alt}) => {
        return (
            <li key={id} className={style.listItem}>
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
            </li>
        )
    })
    return (
        <div className={style.container}>
            <ul className={style.listItems}>
                {messageList}
            </ul>
            <div className={style.textareaFlex}>
                <textarea className={style.textarea}></textarea>
                <button className={style.btn}>Отправить</button>
            </div>
        </div>
    )
}