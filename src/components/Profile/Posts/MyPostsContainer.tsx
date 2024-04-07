import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'

export type MyPostsContainerPropsType = {
    store: any
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const state = props.store.getState()

    const addPosts = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        const action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPosts}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
}