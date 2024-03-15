import React from 'react'
import {Posts, PostsType} from './Posts/Posts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
    state: { posts: PostsType }
    addPost: (newMessage: string) => void
}

export const Profile = ({state, addPost}: ProfilePropsType) => {

    return <div>
        <ProfileInfo/>
        <Posts
            posts={state.posts}
            addPost={addPost}
        />
    </div>
}