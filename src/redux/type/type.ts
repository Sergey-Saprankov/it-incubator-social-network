export type AddPostActionType = {
    type: 'ADD-POST'
    text: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    text: string
}
export type AddNewPostTextActionType = {
    type: 'ADD-NEW-POST-TEXT'
    text: string
}
export type AddNewMessageTextActionType = {
    type: 'ADD-NEW-MESSAGE-TEXT'
    text: string
}
export type ActionType =
    AddPostActionType
    | AddNewPostTextActionType
    | AddNewMessageTextActionType
    | AddMessageActionType


export const ActionType = {
    ADD_POST: 'ADD-POST',
    ADD_MESSAGE: 'ADD-MESSAGE',
    ADD_NEW_POST: 'ADD-NEW-POST-TEXT',
    ADD_MESSAGE_TEXT: 'ADD-NEW-MESSAGE-TEXT'
}
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