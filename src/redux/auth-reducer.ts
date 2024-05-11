import {ActionsTypes} from './redux-store'
import {Dispatch} from 'redux'
import {authApi} from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userId: null, email: null, login: null) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
    },
} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.me().then(response => {
        if (response.data.resultCode === 0) {
            const {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}