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
    Dialog: DialogType[]
}

export type DataType  = {
    Dialogs: DialogsType
    dataFriend: FriendsType[]
}

export type AppType = {
    data: DataType
}