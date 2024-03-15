import React from 'react'
import {Posts, PostsType} from './Posts/Posts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
    state: { posts: PostsType }
}

export const Profile = ({state}: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <Posts posts={state.posts}/>
    </div>
}