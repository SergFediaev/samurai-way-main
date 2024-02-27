import React from 'react'
import classes from './Posts.module.css'
import {Post} from './Post/Post'

export const Posts = () => {
    return <div className={classes.postsBlock}><h3>My posts</h3>
        <div>
            <div><textarea></textarea></div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={classes.posts}>
            <Post message="Hi, how are you?" likesCount={15}/>
            <Post message="It's my first post." likesCount={20}/>
        </div>
    </div>
}