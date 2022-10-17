import React, {ChangeEvent} from "react";
import style from './ProfilePosts.module.css'
import {Post} from "./Post/Post";
import {PostDataPageType} from "../../../redux/state";

type ProfilePostsType = {
    postDataPage: PostDataPageType
    addPost: (text: string) => void
    addNewPostText: (text: string) => void
}

export const ProfilePosts: React.FC<ProfilePostsType> = ({postDataPage, addPost, addNewPostText}) => {
    const {posts, newPostText} = postDataPage

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        addNewPostText(e.currentTarget.value)
    }

    const addNewPost = () => {
        addPost(newPostText)
        addNewPostText('')
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