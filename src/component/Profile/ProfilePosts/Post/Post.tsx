import React from "react";
import {PostType} from "../../../../redux/state";
import style from './Post.module.css'

type PostTypeProps = {
    posts: PostType[]
}

export const Post: React.FC<PostTypeProps> = ({posts}) => {
    const [id, src, name, date, post, likes] = posts
    return (
        <div>
            <ul className={style.items}>
                {posts.map(({id, src, name, date, post, likes, alt}) => {
                    return (
                        <li className={style.item} key={id}>
                            <div className={style.postInformationContainer}>
                                <img className={style.postImg} src={src} alt={alt}/>
                                <div className={style.nameDateContainer}>
                                    <span className={style.title}>{name}</span>
                                    <span className={style.date}>{date}</span>
                                </div>
                            </div>
                            <div className={style.wrapperPostLikes}>
                                <div className={style.postContainer}>
                                    <span className={style.post}>{post}</span>
                                </div>
                                <div className={style.containerLikes}>
                                    <span>likes: {likes}</span>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}