import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {ActionType, AddNewPostTextActionType, AddPostActionType, PostDataPageType} from "./type/type";

export const addPostActionCreator = (postText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        text: postText
    } as const
}

export const addPostTextActionCreator = (postText: string): AddNewPostTextActionType => {
    return {
        type: 'ADD-NEW-POST-TEXT',
        text: postText
    } as const
}

const initialState: PostDataPageType = {
    posts: [],
    newPostText: '',
    datePost() {
        let date = new Date().toString();
        return date.split(' ').filter((el, i) => i <= 3).join(' ');
    },
}

const profileReducer = (state: PostDataPageType = initialState, action: ActionType): PostDataPageType => {
    let copyState: PostDataPageType;
    switch (action.type) {
        case ActionType.ADD_POST:
            const newPost = {
                id: v1(),
                src: avatar,
                alt: 'avatar',
                name: "Сергей Сапранков",
                date: state.datePost(),
                post: action.text,
                likes: Math.floor(Math.random() * 10)
            }
            copyState = {...state, posts: [...state.posts]};
            copyState.posts.push(newPost);
            return copyState;

        case ActionType.ADD_NEW_POST:
            copyState = {...state};
            copyState.newPostText = action.text;
            return copyState;

        default:
            return state;
    }
}

export default profileReducer
