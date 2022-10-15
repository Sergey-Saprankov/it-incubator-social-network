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

export type DataType  = {
    messagesPage: MessagePageType
    dataFriend: FriendsType[]
}

export type AppType = {
    data: DataType
}