import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {StoreContext} from '../../../StoreContext'

export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            const state = store.getState()

            const addPosts = () => {
                store.dispatch(addPostActionCreator())
            }

            const onPostChange = (text: string) => {
                const action = updateNewPostTextActionCreator(text)
                store.dispatch(action)
            }

            return <MyPosts updateNewPostText={onPostChange}
                            addPost={addPosts}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}/>
        }}
    </StoreContext.Consumer>
}