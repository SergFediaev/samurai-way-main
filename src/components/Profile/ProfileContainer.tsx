import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profile-reducer'
import {Profile} from './Profile'

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: any) => ({profile: state.profilePage.profile})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)