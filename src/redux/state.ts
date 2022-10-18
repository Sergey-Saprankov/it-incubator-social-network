import { render } from '@testing-library/react';
import {v1} from "uuid";
import avatar from '../img/avatar.jpg'


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
}


export type DataType = {
    postDataPage: PostDataPageType
    messagesPage: MessagePageType
    dataFriend: FriendsType[]

}

export type StoreType = {
    _state: DataType
    datePost: () => string
    addPost: (text: string) => void
    addNewPostText: (text: string) => void
    _render: () => void
    subscribe: (observer: () => void) => void
    getState: () => DataType
}




export const store: StoreType = {
    _state: {
        postDataPage: {
            posts: [],
            newPostText: '',
        },
        messagesPage: {
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

    datePost() {
        let date = new Date().toString();
        return date.split(' ').filter((el, i) => i <= 3).join(' ');
    },

    addPost(text: string) {
        const newPost = {
            id: v1(),
            src: avatar,
            alt: 'avatar',
            name: "Сергей Сапранков",
            date: this.datePost(),
            post: text,
            likes: Math.floor(Math.random() * 10)
        }
        this._state.postDataPage.posts.push(newPost);
        this._render()
    },

    addNewPostText(text: string) {
        this._state.postDataPage.newPostText = text;
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