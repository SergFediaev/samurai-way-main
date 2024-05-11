import {PostPropsType} from '../components/Profile/Posts/Post/Post'
import {ActionsTypes} from './redux-store'
import {Dispatch} from 'redux'
import {usersApi} from '../api/api'

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 30},
        {id: 3, message: 'Bla.', likesCount: 50},
        {id: 4, message: 'Da.', likesCount: 0},
    ] as PostPropsType[],
    newPostText: 'it-kamasutra.com',
    profile: null,
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostPropsType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
} as const)

export const updateNewPostTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText,
} as const)

export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE,
    profile,
} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}