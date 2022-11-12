import {
    FollowUserACType,
    SetUsersACType,
    UnfollowUserACType,
} from "../user-reducer";
import {
    AddMessageACType,
    AddNewMessageTextACType
} from "../message-reducer";
import {
    AddNewPostTextACType,
    AddPostACType,
} from "../profile-reducer";

export const ACTION = {
    ADD_POST: 'ADD-POST',
    ADD_MESSAGE: 'ADD-MESSAGE',
    ADD_NEW_POST_TEXT: 'ADD-NEW-POST-TEXT',
    ADD_MESSAGE_TEXT: 'ADD-NEW-MESSAGE-TEXT',
    FOLLOW: 'FOLLOW-USER',
    UNFOLLOW: 'UNFOLLOW-USER',
    SET_USERS: "SET-USERS"
} as const

export type ActionType =
    AddNewMessageTextACType
    | AddMessageACType
    | AddNewPostTextACType
    | AddPostACType
    | FollowUserACType
    | UnfollowUserACType
    | SetUsersACType


export type DialogType = {
    id: string
    src: string
    alt: string
    title: string
    description: string
}
export type FriendsType = {
    id: string
    src: string
    alt: string
    title: string
}

export type MessagePageType = {
    messages: DialogType[]
    dialogs: DialogType[]
    newMessage: string
}
export type  PostType = {
    id: string
    src: string
    alt: string
    name: string
    date: string
    post: string
    likes: number
}
export type PostDataPageType = {
    posts: PostType[]
    newPostText: string
    datePost: () => string
}
export type DataType = {
    postDataPage: PostDataPageType
    messagesPage: MessagePageType
    dataFriend: FriendsType[]
}