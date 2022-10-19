import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {ActionType, PostDataPageType} from "../redux/state";


const profileReducer = (state:PostDataPageType, action: ActionType) => {
    if (action.type === ActionType.ADD_POST) {
        const newPost = {
            id: v1(),
            src: avatar,
            alt: 'avatar',
            name: "Сергей Сапранков",
            date: state.datePost(),
            post: action.text,
            likes: Math.floor(Math.random() * 10)
        }
        state.posts.push(newPost);
    } else if (action.type === ActionType.ADD_NEW_POST) {
        state.newPostText = action.text;
    }
    return state
}

export  default  profileReducer