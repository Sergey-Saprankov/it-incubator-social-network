import React from "react";
import {addMessageActionCreator, addMessageTextActionCreator} from "../../../redux/message-reducer";
import {MessagePageType} from "../../../redux/type/type";
import {Message} from "./Message";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    messagesPage: MessagePageType
}

export type MapDispatchToPropsType = {
    onChangeMessage: (value: string) => void
    addMessage: () => void
}

export type MessagePropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeMessage: (value: string) => {
            dispatch(addMessageTextActionCreator(value))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
            dispatch(addMessageTextActionCreator(''))
        }
    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)