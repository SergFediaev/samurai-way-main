import React from 'react'
import {Posts, PostsType} from './Posts/Posts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
    posts: PostsType
}

export const Profile = ({posts}: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <Posts posts={posts}/>
    </div>
}