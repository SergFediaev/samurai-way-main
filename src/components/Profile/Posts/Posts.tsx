import React from 'react'
import classes from './Posts.module.css'
import {Post} from './Post/Post'

export const Posts = () => {

    let postData = [
        {
            id: 1, message: 'Hi, how are you', likesCount: 12,
        },
        {
            id: 2, message: 'It\'s my first post.', likesCount: 30,
        },
    ]

    return <div className={classes.postsBlock}><h3>My posts</h3>
        <div>
            <div><textarea></textarea></div>
            <div>
                <button>Remove</button>
                <button>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>
    </div>
}