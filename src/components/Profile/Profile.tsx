import React from 'react'
import {Posts, PostsType} from './Posts/Posts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

export const Profile = () => {
    let posts: PostsType = [
        {
            id: 1, message: 'Hi, how are you', likesCount: 12,
        },
        {
            id: 2, message: 'It\'s my first post.', likesCount: 30,
        },
        {
            id: 3, message: 'Bla.', likesCount: 50,
        },
        {
            id: 4, message: 'Da.', likesCount: 0,
        },
    ]

    return <div>
        <ProfileInfo/>
        <Posts posts={posts}/>
    </div>
}