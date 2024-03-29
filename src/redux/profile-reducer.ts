import {PostPropsType} from '../components/Profile/Posts/Post/Post'
import {ActionsTypes, ProfilePageType} from './state'

export const ADD_POST = 'ADD-POST'
export const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType = {
                id: ++state.posts.length,
                message: state.newPostText,
                likesCount: 0,
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () => ({
    type: ADD_POST,
} as const)

export const changeNewTextActionCreator = (newText: string) => ({
    type: CHANGE_NEW_TEXT,
    newText,
} as const)

export default profileReducer