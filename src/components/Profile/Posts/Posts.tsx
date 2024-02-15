import React from 'react'
import classes from './Posts.module.css'
import {Post} from './Post/Post'

export const Posts = () => {
    return <div>My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={classes.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
}