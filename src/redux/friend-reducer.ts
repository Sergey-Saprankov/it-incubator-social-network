import React from "react";
import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {ActionType, FriendsType} from "./type/type";

const initialState: FriendsType[] = [
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

export const friendReducer = (state: FriendsType[] = initialState, action: ActionType): FriendsType[]  => {

    return state
}