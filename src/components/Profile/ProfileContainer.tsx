import React from 'react'
import {connect} from 'react-redux'
import {getUserProfile} from '../../redux/profile-reducer'
import {Profile} from './Profile'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {AppStoreType} from '../../redux/redux-store'

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = (2).toString()

        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => ({profile: state.profilePage.profile})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)