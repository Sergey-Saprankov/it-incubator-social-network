import React from "react";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profile-reducer";
import {PostDataPageType} from "../../../redux/type/type";
import {ProfilePosts} from "./ProfilePosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export type MapProfilePostsStateProps = {
    postDataPage: PostDataPageType
}

export type MapProfilePostsDispatchProps = {
    onChangeTextArea: (value: string) => void
    addNewPost: (value: string) => void
}


export const mapProfilePostsStateProps = (state: StoreType): MapProfilePostsStateProps => {
    return {
        postDataPage: state.postDataPage
    }
}

export type ProfilePropsType = MapProfilePostsDispatchProps & MapProfilePostsStateProps

export const mapProfilePostsDispatchProps = (dispatch: Dispatch): MapProfilePostsDispatchProps => {
    return {
        onChangeTextArea: (value: string) => {
            dispatch(addPostTextActionCreator(value))
        },
        addNewPost: (value: string) => {
            dispatch(addPostActionCreator(value))
            dispatch(addPostTextActionCreator(''))
        },
    }
}


export const ProfilePostsContainer = connect(mapProfilePostsStateProps, mapProfilePostsDispatchProps)(ProfilePosts)