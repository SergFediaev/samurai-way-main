import React from 'react'
import classes from './Posts.module.css'
import {Post, PostPropsType} from './Post/Post'
import {ActionType} from '../../../redux/state'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'

export type PostsType = PostPropsType[]

export type PostsPropsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const Posts = ({posts, newPostText, dispatch}: PostsPropsType) => {
    const postsElements = posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addPosts = () => dispatch(addPostActionCreator())

    const onPostChange = () => {
        if (newPostElement.current?.value) dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    return <div className={classes.postsBlock}><h3>My posts</h3>
        <div>
            <div><textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/></div>
            <div>
                <button>Remove</button>
                <button onClick={addPosts}>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>{postsElements}</div>
    </div>
}