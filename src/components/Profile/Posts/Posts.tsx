import React from 'react'
import classes from './Posts.module.css'
import {Post, PostPropsType} from './Post/Post'

export type PostsType = PostPropsType[]

export const Posts = () => {

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

    let postsElements = posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

    return <div className={classes.postsBlock}><h3>My posts</h3>
        <div>
            <div><textarea></textarea></div>
            <div>
                <button>Remove</button>
                <button>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>{postsElements}</div>
    </div>
}