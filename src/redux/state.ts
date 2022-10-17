import {v1} from "uuid";
import avatar from '../img/avatar.jpg'

let render = () => {

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


export const state: DataType = {
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
}

const datePost = (): string => {
    let date = new Date().toString();
    return date.split(' ').filter((el, i) => i <= 3).join(' ');
}

export const subscribe = (observer: () => void) => {
    render = observer
}


export const addPost = (text: string) => {
    const newPost = {
        id: v1(),
        src: avatar,
        alt: 'avatar',
        name: "Сергей Сапранков",
        date: datePost(),
        post: text,
        likes: Math.floor(Math.random() * 10)
    }
    state.postDataPage.posts.push(newPost);
    render()
}

export const addNewPostText = (text: string) => {
    state.postDataPage.newPostText = text;
    render()
}