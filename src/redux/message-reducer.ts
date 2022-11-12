import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {
    ACTION,
    ActionType,
    DialogType,
    MessagePageType
} from "./type/type";


export type AddMessageACType = ReturnType<typeof addMessageActionCreator>
export type AddNewMessageTextACType = ReturnType<typeof addMessageTextActionCreator>

export const addMessageTextActionCreator = (text: string) => {
    return {
        type: ACTION.ADD_MESSAGE_TEXT,
        text: text
    } as const
}

export const addMessageActionCreator = () => {
    return {
        type: ACTION.ADD_MESSAGE
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
    let stateCopy: MessagePageType;

    switch (action.type) {
        case ACTION.ADD_MESSAGE_TEXT:
            return {...state, newMessage: action.text};

        case ACTION.ADD_MESSAGE:
            const newMessage: DialogType = {
                id: v1(),
                src: avatar,
                alt: "dialog",
                title: "Я",
                description: state.newMessage
            }
            stateCopy = {...state, messages: [...state.messages]};
            stateCopy.messages.push(newMessage);
            return stateCopy;
        default:
            return state;
    }
}

export default messageReducer
