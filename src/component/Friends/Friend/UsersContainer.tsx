import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";

import {
    followUserAC,
    selectedPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowUserAC,
    UsersType
} from "../../../redux/user-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";


class UsersClassAPIComponent extends React.Component<FriendType> {
    componentDidMount() {
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetchingAC(false);
            this.props.setUsersAC(response.data.items);
            this.props.setTotalUsersCountAC(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {

        this.props.selectedPageAC(p)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsersAC(response.data.items)

        })
    }

    render() {
        return (
            <>
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       users={this.props.users}
                       currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                       followUser={this.props.followUserAC}
                       unfollowUser={this.props.unfollowUserAC}/>

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
    followUserAC: (id: number) => void
    unfollowUserAC: (id: number) => void
    setUsersAC: (users: UsersType[]) => void
    selectedPageAC: (value: number) => void
    setTotalUsersCountAC: (value: number) => void
    toggleIsFetchingAC: (value: boolean) => void
}

export type FriendType = MapStateFriendProps & MapDispatchUsersToProps;


const mapStateFriendProps = (state: StoreType): MapStateFriendProps => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching
    }
}
export const UsersContainer = connect(mapStateFriendProps, {
    followUserAC,
    unfollowUserAC,
    setUsersAC,
    selectedPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
})(UsersClassAPIComponent)


