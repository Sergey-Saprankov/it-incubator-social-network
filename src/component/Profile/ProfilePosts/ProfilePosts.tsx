import React, {ChangeEvent} from "react";
import style from './ProfilePosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./ProfilePostsContainer";




export const ProfilePosts: React.FC<ProfilePropsType> = ({postDataPage,addNewPost, onChangeTextArea}) => {
    const {posts, newPostText} = postDataPage

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeTextArea(e.currentTarget.value)
    }

    const addNewPostHandler = () => {
        addNewPost(newPostText)
        onChangeTextArea('')
    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <textarea value={newPostText} onChange={onChangeTextAreaHandler} className={style.textarea}
                          placeholder={'Что у вас нового ?'}></textarea>
                <button onClick={addNewPostHandler}>Отправить</button>
            </div>

            <Post posts={posts}/>
        </div>


    )
}