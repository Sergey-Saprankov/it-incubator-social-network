import React from "react";
import {connect} from "react-redux";
import {Dialog} from "./Dialog";
import {StoreType} from "../../../redux/redux-store";
import {DialogType} from "../../../redux/type/type";

// type DialogTypeProps = {
//     id: string
//     src: string
//     alt: string
//     title: string
//     description: string
//     link: number
// }
//
// export const Dialog: React.FC<DialogTypeProps> = ({id, src, alt, title, description, link}) => {
//     return (
//         <li key={id} className={style.item}>
//             <NavLink to={`/dialogs/${link}`} href="">
//                 <div className={style.flexWrapper}>
//                     <div>
//                         <img className={style.img}
//                              src={src}
//                              alt={alt}/>
//                     </div>
//                     <div className={style.textWrapper}>
//                         <div className={style.title}>{title}</div>
//                         <p className={style.description}>{description}</p>
//                     </div>
//                 </div>
//             </NavLink>
//         </li>
//     )
// }

export type MapStateDialogToPropsType = {
    dialogsPage:  DialogType[]
}


export const mapStateDialogProps = (state: StoreType): MapStateDialogToPropsType  => {
    return {
        dialogsPage: state.messagesPage.dialogs,
    }
}

export const DialogContainer = connect(mapStateDialogProps)(Dialog)
