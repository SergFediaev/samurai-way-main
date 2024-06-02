import React, {memo} from 'react'
import classes from './Posts.module.css'
import {Post} from './Post/Post'
import {MyPostsPagePropsType} from './MyPostsContainer'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} validate={[required, maxLength10]}
                   placeholder={'Post message'}/>
        </div>
        <div>
            <button>Remove</button>
            <button>Add post</button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

// @ts-ignore
// window.props = []

export const MyPosts = memo((props: MyPostsPagePropsType) => {
    // @ts-ignore
    // window.props.push(props)
    // console.log('MyPosts render')
    // console.log('MyPosts props: ', props)

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
})

/*
export class MyPosts extends React.PureComponent<MyPostsPagePropsType> {
    /!*    componentDidUpdate(prevProps: Readonly<MyPostsPagePropsType>, prevState: Readonly<{}>, snapshot?: any) {
            console.log('MyPosts componentDidUpdate()')
        }*!/

    shouldComponentUpdate(nextProps: Readonly<MyPostsPagePropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        // @ts-ignore
        window.props.push(this.props)
        console.log('MyPosts render')
        console.log('MyPosts props: ', this.props)
        const postsElements = this.props.posts.map(post => <Post key={post.id}
                                                                 id={post.id}
                                                                 message={post.message}
                                                                 likesCount={post.likesCount}/>)
        const onAddPost = (values: FormDataType) => {
            this.props.addPost(values.newPostText)
        }

        return <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>{postsElements}</div>
        </div>
    }
}*/