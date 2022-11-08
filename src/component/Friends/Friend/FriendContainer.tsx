import React from "react";
import {connect} from "react-redux";

import {FriendsType} from "../../../redux/type/type";
import {StoreType} from "../../../redux/redux-store";
import {Friend} from "./Friend";


export type MapStateFriendProps = {
    dataFriend: FriendsType[]
}

const mapStateFriendProps = (state: StoreType): MapStateFriendProps => {
    return {
        dataFriend: state.friendsData
    }
}
export const  FriendContainer = connect(mapStateFriendProps)(Friend)