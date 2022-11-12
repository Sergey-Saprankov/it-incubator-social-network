import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {ACTION, ActionType, PostDataPageType, PostType} from "./type/type";

export type AddPostACType = ReturnType<typeof addPostActionCreator>
export type AddNewPostTextACType = ReturnType<typeof addPostTextActionCreator>


export const addPostActionCreator = () => {
    return {
        type: ACTION.ADD_POST,
    } as const
}

export const addPostTextActionCreator = (postText: string) => {
    return {
        type: ACTION.ADD_NEW_POST_TEXT,
        postText
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
    let stateCopy: PostDataPageType;
    switch (action.type) {
        case ACTION.ADD_POST:
            const newPost: PostType = {
                id: v1(),
                src: avatar,
                alt: 'avatar',
                name: "Сергей Сапранков",
                date: state.datePost(),
                post: state.newPostText,
                likes: Math.floor(Math.random() * 10)
            }
            stateCopy = {...state, posts: [...state.posts]};
            stateCopy.posts.push(newPost);
            return stateCopy;

        case ACTION.ADD_NEW_POST_TEXT:
            stateCopy = {...state};
            stateCopy.newPostText = action.postText;
            return stateCopy;

        default:
            return state;
    }
}

export default profileReducer
