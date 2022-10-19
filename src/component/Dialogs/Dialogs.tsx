import React from "react";
import style from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {ActionType, AddNewPostTextActionType, AddPostActionType, MessagePageType} from "../../redux/state";



type DialogsTypeProps = {
    messagesPage:  MessagePageType
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsTypeProps> = ( {messagesPage, dispatch}) => {
    const dialogList = messagesPage.dialogs.dialog.map(({id, src, alt, title, description}, i) => {
        return (
            <Dialog  key={id} link={i + 1} id={id} src={src} alt={alt} title={title} description={description}/>
        )
    })

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <ul className={style.items}>
                    {dialogList}
                </ul>
            </div>
            <Message dispatch={dispatch} messagesPage={messagesPage}/>
        </div>

    )
}