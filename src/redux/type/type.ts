import {
    FollowingInProgressACType,
    FollowUserACType, SelectedPageACType, SetTotalUsersCountACType,
    SetUsersACType, ToggleIsFetchingACType,
    UnfollowUserACType, UsersType,
} from "../user-reducer";
import {
    AddMessageACType,
    AddNewMessageTextACType
} from "../message-reducer";
import {
    AddNewPostTextACType,
    AddPostACType, SetUserProfileACType,
} from "../profile-reducer";
import {SetUserDataAcType, SetUserPhotoACType} from "../auth-reducer";

export const ACTION = {
    ADD_POST: 'ADD-POST',
    ADD_MESSAGE: 'ADD-MESSAGE',
    ADD_NEW_POST_TEXT: 'ADD-NEW-POST-TEXT',
    ADD_MESSAGE_TEXT: 'ADD-NEW-MESSAGE-TEXT',
    FOLLOW: 'FOLLOW-USER',
    UNFOLLOW: 'UNFOLLOW-USER',
    SET_USERS: "SET-USERS",
    SELECTED_PAGE: "SELECTED-PAGE",
    SET_USERS_COUNT: "SET-USERS-COUNT",
    TOGGLE_IS_FETCHING: "TOGGLE-IS-FETCHING",
    SET_USER: "SET-USER",
    SET_USER_DATA: "SET-USER-DATA",
    SET_USER_PHOTO: "SET-USER-PHOTO",
    FOLLOWING_IS_PROGRESS: "FOLLOWING-IS-PROGRESS"
} as const

export type ActionType =
    AddNewMessageTextACType
    | AddMessageACType
    | AddNewPostTextACType
    | AddPostACType
    | FollowUserACType
    | UnfollowUserACType
    | SetUsersACType
    | SelectedPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | SetUserProfileACType
    | SetUserDataAcType
    | SetUserPhotoACType
    | FollowingInProgressACType


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

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type UserProfileDataType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
} | null

export type PostDataPageType = {
    posts: PostType[]
    newPostText: string
    datePost: () => string
    userProfileData: UserProfileDataType
}
export type DataType = {
    postDataPage: PostDataPageType
    messagesPage: MessagePageType
    dataFriend: FriendsType[]
}

export type UsersPropsType = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number,
    currentPage: number
    onPageChanged: (p: number) => void
    disable: boolean,
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
}


export type ProfilePropsType = {
    userProfileInfo: UserProfileDataType
}