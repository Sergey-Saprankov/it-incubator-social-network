

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
    name: string
    date: string
    post: string
    likes: number
}



export type PostDataPageType = {
    posts: PostType[] 
}




export type DataType  = {
    postDataPage: PostDataPageType
    messagesPage: MessagePageType
    dataFriend: FriendsType[]

}



export type AppType = {
    data: DataType
}