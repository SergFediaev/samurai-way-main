import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './Posts/MyPostsContainer'

type ProfilePropsType = {
    store: any
}

export const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
}