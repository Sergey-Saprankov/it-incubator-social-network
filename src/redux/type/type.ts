import {followUserAC, setUsersAC, unfollowUserAC, UserInitialStateType} from "../user-reducer";
import {addMessageActionCreator, addMessageTextActionCreator} from "../message-reducer";
import {addPostActionCreator, addPostTextActionCreator} from "../profile-reducer";

export const Action = {
    ADD_POST: 'ADD-POST',
    ADD_MESSAGE: 'ADD-MESSAGE',
    ADD_NEW_POST: 'ADD-NEW-POST-TEXT',
    ADD_MESSAGE_TEXT: 'ADD-NEW-MESSAGE-TEXT',
    FOLLOW: 'FOLLOW-USER',
    UNFOLLOW: 'UNFOLLOW-USER',
    SET_USERS: "SET-USERS"
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export type AddNewPostTextActionType = ReturnType<typeof addPostTextActionCreator>
export type AddNewMessageTextActionType = ReturnType<typeof addMessageTextActionCreator>
export type FollowUserAC = ReturnType<typeof followUserAC>
export type UnfollowUserAC = ReturnType<typeof unfollowUserAC>
export type SetUsersAC = ReturnType<typeof setUsersAC>

export type ActionType =
    AddPostActionType
    | AddNewPostTextActionType
    | AddNewMessageTextActionType
    | AddMessageActionType
    | FollowUserAC
    | UnfollowUserAC
    | SetUsersAC

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