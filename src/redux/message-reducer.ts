import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {
    ActionType,
    AddMessageActionType,
    AddNewMessageTextActionType,
    DialogType,
    MessagePageType
} from "./type/type";

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


const initialState: MessagePageType = {
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
    dialogs: [
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
    ,
}

const messageReducer = (state: MessagePageType = initialState, action: ActionType): MessagePageType => {
    let copyState: MessagePageType;

    switch (action.type) {
        case ActionType.ADD_MESSAGE_TEXT:
            copyState = {...state};
            copyState.newMessage = action.text;
            return copyState;
        case ActionType.ADD_MESSAGE:
            const newMessage: DialogType = {
                id: v1(),
                src: avatar,
                alt: "dialog",
                title: "Я",
                description: state.newMessage
            }
            copyState = {...state, messages: [...state.messages]};
            copyState.messages.push(newMessage);
            return copyState;
        default:
            return state;
    }
}

export default messageReducer
