import React from "react";
import style from './ProfilePosts.module.css'
import { Post } from "./Post/Post";
import { PostDataPageType} from "../../../type/type";

type ProfilePostsType = {
    postDataPage: PostDataPageType
    addPost: (text: string) => void
}

export const ProfilePosts:React.FC<ProfilePostsType> = ({postDataPage, addPost}) => {
    const {posts} = postDataPage

    let newPost = React.createRef<HTMLTextAreaElement>();
    const addNewPost = () => {
       if(newPost.current?.value) addPost(newPost.current?.value) 
    }
    return (
        <div className={style.wrapper}>
         <div className={style.container}>
            <textarea ref={newPost} className={style.textarea} placeholder={'Что у вас нового ?'}></textarea>
            <button onClick={addNewPost}>Отправить</button>
        </div>

        <Post posts={posts}/>
        </div>
       

    )
}