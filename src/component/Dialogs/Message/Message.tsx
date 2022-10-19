import React, {ChangeEvent} from "react";
import style from "./Message.module.css";
import {
    ActionType, addMessageActionCreator,
    addMessageTextActionCreator,
    AddNewPostTextActionType,
    AddPostActionType,
    MessagePageType
} from "../../../redux/state";


type MessageType = {
    messagesPage: MessagePageType
    dispatch: (action: ActionType) => void
}

export const Message: React.FC<MessageType> = ({messagesPage, dispatch}) => {

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(messagesPage.newMessage)
        dispatch(addMessageTextActionCreator(e.currentTarget.value))
    }

    const onClickHandler = () => {
            dispatch(addMessageActionCreator(messagesPage.newMessage))
            dispatch(addMessageTextActionCreator(''))

    }

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
                <textarea value={messagesPage.newMessage} onChange={onChangeMessageHandler} className={style.textarea}></textarea>
                <button onClick={onClickHandler} className={style.btn}>Отправить</button>
            </div>
        </div>
    )
}