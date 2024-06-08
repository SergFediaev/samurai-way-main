import {PostPropsType} from '../components/Profile/Posts/Post/Post'
import {ActionsTypes} from './redux-store'
import {Dispatch} from 'redux'
import {profileApi, usersApi} from '../api/api'

export const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 30},
        {id: 3, message: 'Bla.', likesCount: 50},
        {id: 4, message: 'Da.', likesCount: 0},
    ] as PostPropsType[],
    profile: null,
    status: '',
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostPropsType = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0,
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case 'DELETE_POST': {
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({
    type: ADD_POST,
    newPostText,
} as const)

export const setUserProfile = (profile: any) => ({
    type: SET_USER_PROFILE,
    profile,
} as const)

export const setStatus = (status: any) => ({
    type: SET_STATUS,
    status,
} as const)


export const deletePost = (postId: number) => ({
    type: 'DELETE_POST',
    postId,
} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (status: any) => (dispatch: Dispatch) => {
    profileApi.getStatus(status).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status: any) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}