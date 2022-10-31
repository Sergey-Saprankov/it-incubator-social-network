import React from "react";
import {addMessageActionCreator, addMessageTextActionCreator} from "../../../redux/message-reducer";
import {ActionType, DataType, MessagePageType} from "../../../redux/type/type";
import {Message} from "./Message";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


// type MessageType = {
//     messagesPage: MessagePageType
//     dispatch: (action: ActionType) => void
// }
//
// export const MessageContainer: React.FC<MessageType> = ({messagesPage, dispatch}) => {
//
//     const onChangeMessage = (value: string) => {
//                 dispatch(addMessageTextActionCreator(value))
//     }
//
//     const addMessage = (value: string) => {
//             dispatch(addMessageActionCreator(value))
//             dispatch(addMessageTextActionCreator(''))
//
//     }
//
//     return (
//         <Message  onChangeMessage={onChangeMessage} addMessage={addMessage} messagesPage={messagesPage}/>
//     )
// }

export type MapStateToPropsType = {
    messagesPage: MessagePageType
}

export type MapDispatchToPropsType = {
    onChangeMessage: (value: string) => void
    addMessage: (value: string) => void
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
        addMessage: (value: string) => {
            dispatch(addMessageActionCreator(value))
            dispatch(addMessageTextActionCreator(''))
        }
    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)