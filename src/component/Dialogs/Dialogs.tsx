import React from "react";
import style from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {MessagePageType} from "../../type/type";


type DialogsTypeProps = {
    messagesPage:  MessagePageType
}

export const Dialogs: React.FC<DialogsTypeProps> = ( {messagesPage}) => {
    const dialogList = messagesPage.dialogs.dialog.map(({id, src, alt, title, description}, i) => {
        return (
            <Dialog link={i + 1} id={id} src={src} alt={alt} title={title} description={description}/>
        )
    })

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <ul className={style.items}>
                    {dialogList}
                </ul>
            </div>
            <Message messagesPage={messagesPage}/>
        </div>

    )
}