import React from 'react'
import classes from './Posts.module.css'
import {Post, PostPropsType} from './Post/Post'
import {addPostActionCreator, changeNewTextActionCreator} from '../../../redux/profile-reducer'
import {ActionsTypes} from '../../../redux/state'

export type PostsType = PostPropsType[]

export type PostsPropsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const Posts = ({posts, newPostText, dispatch}: PostsPropsType) => {
    const postsElements = posts.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                  likesCount={post.likesCount}/>)

    const addPosts = () => dispatch(addPostActionCreator())

    const onPostChange = () => {
        if (newPostElement.current?.value) dispatch(changeNewTextActionCreator(newPostElement.current.value))
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