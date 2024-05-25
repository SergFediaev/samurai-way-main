import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppStoreType} from '../../../redux/redux-store'
import {PostPropsType} from './Post/Post'
import {Dispatch} from 'redux'
import {addPostActionCreator} from '../../../redux/profile-reducer'

type MapStateToPropsType = {
    posts: PostPropsType[]
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)