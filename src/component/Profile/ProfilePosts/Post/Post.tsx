import React from "react";
import { PostType} from "../../../../type/type";

type PostTypeProps = {
    posts:PostType[]
}

export const Post:React.FC<PostTypeProps> = ({posts}) => {
    const [id, src, name, date, post, likes] = posts
    return (
        <div>
            <ul>
            {posts.map(({id, src, name, date, post, likes}) => {
                return (
                    <li key={id}>
                        <img src={src} alt="avatar" />
                        <p>{name}</p>
                        <p>{date}</p>
                        <p>{post}</p>
                        <p>{likes}</p>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}