import React from "react";
import style from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {MessageContainer} from "./Message/MessageContainer";
import {DialogContainer} from "./Dialog/DialogContainer";


export const Dialogs = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <DialogContainer/>
            </div>
            <MessageContainer/>
        </div>

    )
}