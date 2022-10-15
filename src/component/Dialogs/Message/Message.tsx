import React from "react";
import style from "./Message.module.css";
import avatar from '../../../img/avatar.jpg'

export const Message = () => {
    return (
        <div className={style.container}>
            <ul className={style.listItems}>
                <li className={style.listItem}>
                    <div className={style.flexWrapper}>
                        <div>
                            <img className={style.img}
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
                                 alt=""/>
                        </div>
                        <div className={style.textWrapper}>
                            <div className={style.title}>Иван</div>
                            <p className={style.description}>Позвони мне в 5</p>
                        </div>
                    </div>
                </li>
                <li className={style.listItem}>
                    <div className={style.flexWrapper}>
                        <div>
                            <img className={style.img}
                                 src={avatar}
                                 alt=""/>
                        </div>
                        <div className={style.textWrapper}>
                            <div className={style.title}>Я</div>
                            <p className={style.description}>Привет</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className={style.textareaFlex}>
                <textarea className={style.textarea}></textarea>
                <button className={style.btn}>Отправить</button>
            </div>
        </div>
    )
}