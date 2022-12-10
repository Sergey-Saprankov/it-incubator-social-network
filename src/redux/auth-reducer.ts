import {ACTION, ActionType} from "./type/type";


export type SetUserDataAcType = ReturnType<typeof setUserDataAC>
export type SetUserPhotoACType = ReturnType<typeof setUserPhotoAC>

export type DataType = {
    id?: number
    email?: string
    login?: string
}

type InitialStateType = {
    data: DataType,
    isAuth: boolean
    photo?: string
}

const initialState: InitialStateType = {
    data: {},
    isAuth: false,
}


export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTION.SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case ACTION.SET_USER_PHOTO:
            return {...state, photo: action.photo}
        default:
            return state;
    }
}

export const setUserDataAC = (data: DataType) => {
    return {
        type: ACTION.SET_USER_DATA,
        data
    } as const
}

export const setUserPhotoAC = (photo: string) => {
    return {
        type: ACTION.SET_USER_PHOTO,
        photo
    } as const
}