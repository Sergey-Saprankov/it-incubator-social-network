import {ACTION, ActionType} from "./type/type";
import {v1} from "uuid";

export type FollowUserACType = ReturnType<typeof followUserAC>
export type UnfollowUserACType = ReturnType<typeof unfollowUserAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
}

export type UserInitialStateType = {
    users: UsersType[]
}

const initialState: UserInitialStateType = {
    users: [
    ]
}



export const followUserAC = (id: number) => {
    return {
        type: ACTION.FOLLOW,
        id
    } as const
}

export const unfollowUserAC = (id: number) => {
    return {
        type: ACTION.UNFOLLOW,
        id
    } as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: ACTION.SET_USERS,
        users
    } as const
}



export const userReducer = (state: UserInitialStateType = initialState, action: ActionType): UserInitialStateType => {
    switch (action.type) {
        case ACTION.FOLLOW :
            return {...state, users:  state.users.map(user => user.id === action.id ? {...user, followed: true} : user)}
        case ACTION.UNFOLLOW :
            return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed: false} : user)}
        case ACTION.SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}