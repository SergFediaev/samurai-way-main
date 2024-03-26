import {ActionType, ProfilePageType} from './state'
import {PostPropsType} from '../components/Profile/Posts/Post/Post'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostPropsType = {
                id: ++state.posts.length,
                message: state.newPostText,
                likesCount: 0,
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.text
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (): ActionType => ({
    type: ADD_POST,
} as ActionType)

export const updateNewPostTextActionCreator = (text: string): ActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    text,
} as ActionType)

export default profileReducer