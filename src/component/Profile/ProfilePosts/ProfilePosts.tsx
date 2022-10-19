import React, {ChangeEvent} from "react";
import style from './ProfilePosts.module.css'
import {Post} from "./Post/Post";
import {
    ActionType,
    addPostActionCreator,
     addPostTextActionCreator,
    PostDataPageType
} from "../../../redux/state";

type ProfilePostsType = {
    postDataPage: PostDataPageType
    dispatch: (action: ActionType) => void
}





export const ProfilePosts: React.FC<ProfilePostsType> = ({postDataPage, dispatch}) => {
    const {posts, newPostText} = postDataPage

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(addPostTextActionCreator(e.currentTarget.value))
    }

    const addNewPost = () => {
        dispatch(addPostActionCreator(newPostText))
        dispatch(addPostTextActionCreator(''))
    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <textarea value={newPostText} onChange={onChangeTextAreaHandler} className={style.textarea}
                          placeholder={'Что у вас нового ?'}></textarea>
                <button onClick={addNewPost}>Отправить</button>
            </div>

            <Post posts={posts}/>
        </div>


    )
}