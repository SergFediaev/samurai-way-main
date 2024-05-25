import React from 'react'
import classes from './Posts.module.css'
import {Post} from './Post/Post'
import {MyPostsPagePropsType} from './MyPostsContainer'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type FormDataType = {
    newPostText: string
}

let AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component="textarea"/>
        </div>
        <div>
            <button>Remove</button>
            <button>Add post</button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export const MyPosts = (props: MyPostsPagePropsType) => {
    const postsElements = props.posts.map(post => <Post key={post.id}
                                                        id={post.id}
                                                        message={post.message}
                                                        likesCount={post.likesCount}/>)
    const onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={classes.posts}>{postsElements}</div>
    </div>
}