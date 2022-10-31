import React from "react";
import style from './Aside.module.css'
import {FriendsType} from "../../redux/type/type";
import {connect} from "react-redux";
import {Aside} from "./Aside";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type MapStateToPropsType = {
    friendsData: FriendsType[]
}


export const mapAsideStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        friendsData: state.friendsData
    }
}

export const AsideContainer = connect(mapAsideStateToProps)(Aside)