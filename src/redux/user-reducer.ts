import React from "react";
import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {Action, ActionType, FollowUserAC, SetUsersAC, UnfollowUserAC} from "./type/type";

export type UserInitialStateType = {
    id: string
    src: string
    alt: string
    fullName: string
    followed: boolean
}
const initialState: UserInitialStateType[] = [
]

export const followUserAC = (id: string) => {
    return {
        type: Action.FOLLOW,
        payload: id
    } as const
}

export const unfollowUserAC = (id: string) => {
    return {
        type: Action.UNFOLLOW,
        payload: id
    } as const
}

export const setUsersAC = (users: UserInitialStateType) => {
    return {
        type: Action.SET_USERS,
        payload: users
    } as const
}

export const userReducer = (state: UserInitialStateType[] = initialState, action: FollowUserAC | UnfollowUserAC | SetUsersAC): UserInitialStateType[] => {
    switch (action.type) {
        case Action.FOLLOW :
            return [...state.map(user => user.id === action.payload ? {...user, followed: true} : user)]
        case Action.UNFOLLOW :
            return [...state.map(user => user.id === action.payload ? {...user, followed: false} : user)]
        case Action.SET_USERS:
            return {...state, users: action.payload}
        default:
            return state;
    }
}