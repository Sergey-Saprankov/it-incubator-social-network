import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {StoreType} from "../../redux/redux-store";
import {DataType, setUserDataAC, setUserPhotoAC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import avatar from '../../img/avatar.jpg'

export class HeaderContainerC extends React.Component<PropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setUserDataCB(response.data)
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.auth.id}`).then(response =>{
                this.props.setUserPhotoCB(response.data.photos.small)
                })
            }
        })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

type MapUserAuthDataToPropsType = {
    auth: DataType
    isAuth: boolean
    photo?: string
}

type MapUserAuthDispatchType = {
    setUserDataCB: (data: DataType) => void
    setUserPhotoCB: (photo: string) => void
}

export type PropsType = MapUserAuthDataToPropsType & MapUserAuthDispatchType;

const mapUserAuthDataToProps = (state: StoreType): MapUserAuthDataToPropsType => {
    return {
        auth: state.auth.data,
        isAuth: state.auth.isAuth,
        photo: state.auth.photo
    }
}


export const HeaderContainer = connect(mapUserAuthDataToProps, {setUserDataCB: setUserDataAC, setUserPhotoCB: setUserPhotoAC})(HeaderContainerC)