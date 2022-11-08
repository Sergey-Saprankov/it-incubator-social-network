import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {Action, ActionType, AddNewPostTextActionType, AddPostActionType, PostDataPageType, PostType} from "./type/type";

export const addPostActionCreator = (postText: string) => {
    return {
        type: Action.ADD_POST,
        payload: postText
    } as const
}

export const addPostTextActionCreator = (postText: string) => {
    return {
        type: Action.ADD_NEW_POST,
        payload: postText
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

const profileReducer = (state: PostDataPageType = initialState, action:  AddPostActionType | AddNewPostTextActionType): PostDataPageType => {
    let stateCopy: PostDataPageType;
    switch (action.type) {
        case Action.ADD_POST:
            const newPost: PostType = {
                id: v1(),
                src: avatar,
                alt: 'avatar',
                name: "Сергей Сапранков",
                date: state.datePost(),
                post: action.payload,
                likes: Math.floor(Math.random() * 10)
            }
            stateCopy = {...state, posts: [...state.posts]};
            stateCopy.posts.push(newPost);
            return stateCopy;

        case Action.ADD_NEW_POST:
            stateCopy = {...state};
            stateCopy.newPostText = action.payload;
            return stateCopy;

        default:
            return state;
    }
}

export default profileReducer
