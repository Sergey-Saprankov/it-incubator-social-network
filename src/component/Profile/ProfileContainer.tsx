import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {UserProfileDataType} from "../../redux/type/type";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type MapStateUserProfileToPropsType = {
    userProfileData: UserProfileDataType
}
type MapDispatchUserProfileToPropsType = {
    setUserProfile: (user: UserProfileDataType) => void
}
export type UserProfileInfoType = MapStateUserProfileToPropsType & MapDispatchUserProfileToPropsType;
type PropsType = RouteComponentProps<PathParamsType> & UserProfileInfoType

export class ProfileContainerC extends React.Component<PropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
            console.log(response.data)
        })
    }

    render() {
        return (
            <Profile userProfileInfo={this.props.userProfileData}/>
        )
    }
}





const mapStateUserProfileToProps = (state: StoreType): MapStateUserProfileToPropsType => {
    return {
        userProfileData: state.postDataPage.userProfileData
    }
}


export const WithUrlDataContainerComponent = withRouter(connect(mapStateUserProfileToProps, {setUserProfile: setUserProfileAC})(ProfileContainerC))


