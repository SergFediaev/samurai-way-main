import React from 'react'
import classes from './Posts.module.css'
import {Post, PostPropsType} from './Post/Post'

export type PostsType = PostPropsType[]

export type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map(post => <Post key={post.id}
                                                        id={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current?.value) props.updateNewPostText(newPostElement.current.value)
    }

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}/>
            </div>
            <div>
                <button>Remove</button>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>{postsElements}</div>
    </div>
}