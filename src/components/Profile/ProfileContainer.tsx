import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profile-reducer'
import {Profile} from './Profile'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: any) => ({profile: state.profilePage.profile})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)