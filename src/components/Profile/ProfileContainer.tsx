import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profile-reducer'
import {Profile} from './Profile'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {AppStoreType} from '../../redux/redux-store'
import {compose} from 'redux'

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: any
    status: any
    authorizedUserId: any
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (userId: string) => void
    savePhoto: (photo: string) => void
    saveProfile: (profile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}/>
    }
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))