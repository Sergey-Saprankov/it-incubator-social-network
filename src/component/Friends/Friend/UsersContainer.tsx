import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followUserAC,
    selectedPage,
    setTotalUsersCount,
    setUsersAC, toggleIsFetching,
    unfollowUserAC,
    UsersType
} from "../../../redux/user-reducer";

import axios from "axios";
import {Users} from "./Users";
import loader from './../../../img/loader.svg'
import {Preloader} from "../../common/Preloader/Preloader";



class UsersClassAPIComponent extends React.Component<FriendType, MapStateFriendProps> {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(this.props.pageSize)
        })
    }

    onPageChanged = (p: number) => {

        this.props.selectedPage(p)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        return (
            <>
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       users={this.props.users}
                       currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                       followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}/>

                {this.props.isFetching && <Preloader/>}
            </>
        )
    }
}

export type MapStateFriendProps = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
}
export type MapDispatchUsersToProps = {
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: UsersType[]) => void
    selectedPage: (value: number) => void
    setTotalUsersCount: (value: number) => void
    setToggleIsFetching: (value: boolean) => void
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
        },

        selectedPage(value: number) {
            dispatch(selectedPage(value))
        },

        setTotalUsersCount(value: number) {
            dispatch(setTotalUsersCount(value))
        },

        setToggleIsFetching(value: boolean) {
            dispatch(toggleIsFetching(value))
        }
    }
}

const mapStateFriendProps = (state: StoreType): MapStateFriendProps => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching
    }
}
export const UsersContainer = connect(mapStateFriendProps, mapDispatchToProps)(UsersClassAPIComponent)