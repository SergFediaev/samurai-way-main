import React from 'react'
import classes from './Posts.module.css'
import {Post, PostPropsType} from './Post/Post'

export type PostsType = PostPropsType[]

export type PostsPropsType = {
    posts: PostsType
}

export const Posts = ({posts}: PostsPropsType) => {
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