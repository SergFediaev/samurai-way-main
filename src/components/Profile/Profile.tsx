import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'

export const Profile = (props: any) => {
    // console.log('Profile render')

    return <div>
        <ProfileInfo savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     saveProfile={props.saveProfile}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}