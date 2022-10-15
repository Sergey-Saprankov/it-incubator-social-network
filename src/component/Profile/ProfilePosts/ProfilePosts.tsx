import React from "react";
import style from './ProfilePosts.module.css'


export const ProfilePosts = () => {
    let newPost = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        alert(newPost.current?.value)
    }
    return (
        <div className={style.container}>
            <textarea ref={newPost} className={style.textarea} placeholder={'Что у вас нового ?'}></textarea>
            <button onClick={addPost}>Отправить</button>
        </div>
    )
}