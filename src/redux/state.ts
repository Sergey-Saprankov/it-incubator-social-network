import {render} from '@testing-library/react';
import {v1} from "uuid";
import avatar from '../img/avatar.jpg'
import profileReducer from "../reducer/profile-reducer";
import messageReducer from "../reducer/message-reducer";

export const ActionType = {
    ADD_POST : 'ADD-POST',
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

export type DialogsType = {
    dialog: DialogType[]
}

export type MessagePageType = {
    messages: DialogType[]
    dialogs: DialogsType
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

export type StoreType = {
    _state: DataType
    _render: () => void
    subscribe: (observer: () => void) => void
    getState: () => DataType
    dispatch: (action: ActionType) => void
}

export const addPostActionCreator = (postText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        text: postText
    } as const
}

export const addPostTextActionCreator = (postText: string): AddNewPostTextActionType => {
    return {
        type: 'ADD-NEW-POST-TEXT',
        text: postText
    } as const
}

export const addMessageTextActionCreator = (text: string): AddNewMessageTextActionType => {
    return {
        type: 'ADD-NEW-MESSAGE-TEXT',
        text: text
    } as const
}

export const addMessageActionCreator = (text: string): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE',
        text: text
    } as const
}

export const store: StoreType = {
    _state: {
        postDataPage: {
            posts: [],
            newPostText: '',
            datePost() {
                let date = new Date().toString();
                return date.split(' ').filter((el, i) => i <= 3).join(' ');
            },
        },
        messagesPage: {
            newMessage: '',
            messages: [
                {
                    id: v1(),
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU",
                    alt: "dialog",
                    title: "Иван",
                    description: 'Позвони мне в 5'
                },
                {
                    id: v1(),
                    src: avatar,
                    alt: "dialog",
                    title: "Я",
                    description: 'Привет'
                }
            ],
            dialogs: {
                dialog: [
                    {
                        id: v1(),
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU",
                        alt: "dialog",
                        title: "Иван",
                        description: 'Позвони мне в 5'
                    },
                    {
                        id: v1(),
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdssuPAVWmU_isiO4aP3ybsEWdc_IEonIvw&usqp=CAU",
                        alt: "dialog",
                        title: "Мария",
                        description: 'Гоу в кино'
                    },
                    {
                        id: v1(),
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxip991oVlIE0GHvVuYBJF32NXceKE-Rzmw&usqp=CAU",
                        alt: "dialog",
                        title: "Толик",
                        description: 'Займи денег'
                    }
                ]
            },
        },
        dataFriend: [
            {
                id: v1(),
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU',
                alt: 'avatar',
                title: 'Иван Иванов',
            },
            {
                id: v1(),
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdssuPAVWmU_isiO4aP3ybsEWdc_IEonIvw&usqp=CAU',
                alt: 'avatar',
                title: 'Иван Петров',
            },
            {
                id: v1(),
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxip991oVlIE0GHvVuYBJF32NXceKE-Rzmw&usqp=CAU',
                alt: 'avatar',
                title: 'Светлана Петрова',
            },
            {
                id: v1(),
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8jEwRitlFu0tnQ6P58GkKsOEIcOR5EWdCw&usqp=CAU',
                alt: 'avatar',
                title: 'Игорь Сазонов',
            },
            {
                id: v1(),
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdApzzKwnuc3dW-T8AI7171iTRkLAkePR5Ww&usqp=CAU',
                alt: 'avatar',
                title: 'Дмитрий Терентьев',
            }
        ]
    },

    dispatch(action) {
        profileReducer(this._state.postDataPage, action)
        messageReducer(this._state.messagesPage, action)
        this._render()
    },

    _render() {
        console.log('render')
    },

    subscribe(observer) {
        this._render = observer
    },

    getState() {
        return this._state
    }
}


