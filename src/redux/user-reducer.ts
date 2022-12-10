import {ACTION, ActionType} from "./type/type";
import {v1} from "uuid";

export type FollowUserACType = ReturnType<typeof followUserAC>
export type UnfollowUserACType = ReturnType<typeof unfollowUserAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SelectedPageACType = ReturnType<typeof selectedPageAC>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export type FollowingInProgressACType = ReturnType<typeof followingInProgressAC>

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
}

export type UserInitialStateType = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}

const initialState: UserInitialStateType = {
    users: [
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
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

export const selectedPageAC = (page: number) => {
    return {
        type: ACTION.SELECTED_PAGE,
        page
    } as const
}

export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: ACTION.SET_USERS_COUNT,
        usersCount
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: ACTION.TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const followingInProgressAC = (followingInProgress: boolean) => {
    return {
        type: ACTION.FOLLOWING_IS_PROGRESS,
        followingInProgress
    } as const
}


export const userReducer = (state: UserInitialStateType = initialState, action: ActionType): UserInitialStateType => {
    switch (action.type) {
        case ACTION.FOLLOW :
            return {...state, users:  state.users.map(user => user.id === action.id ? {...user, followed: true} : user)}
        case ACTION.UNFOLLOW :
            return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed: false} : user)}
        case ACTION.SET_USERS:
            return {...state, users: action.users }
        case ACTION.SELECTED_PAGE:
            return {...state, currentPage: action.page}
        case ACTION.SET_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case ACTION.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case ACTION.FOLLOWING_IS_PROGRESS:
            return {...state, followingInProgress: action.followingInProgress}
        default:
            return state;
    }
}