import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {Friend} from "./Friend";
import {Dispatch} from "redux";
import {followUserAC, setUsersAC, unfollowUserAC, UsersType} from "../../../redux/user-reducer";
import FriendClass from "./FriendClass";



export type MapStateFriendProps = {
    users: UsersType[]
}
export type MapDispatchUsersToProps = {
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: UsersType[]) => void
}

export type FriendType = MapStateFriendProps & MapDispatchUsersToProps;

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchUsersToProps => {
    return {
        followUser(id: number) {
            dispatch(followUserAC(id))
        },

        unfollowUser(id: number) {
            dispatch(unfollowUserAC(id))
        },

        setUsers(users: UsersType[]) {
            dispatch(setUsersAC(users))
        }
    }
}

const mapStateFriendProps = (state: StoreType): MapStateFriendProps => {
    return {
        users: state.usersData.users
    }
}
export const  FriendContainer = connect(mapStateFriendProps, mapDispatchToProps)(FriendClass)