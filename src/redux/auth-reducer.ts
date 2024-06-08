import {ActionsTypes, AppStoreType} from './redux-store'
import {AnyAction, Dispatch} from 'redux'
import {authApi} from '../api/api'
import {ThunkDispatch} from 'redux-thunk'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

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
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserData = (userId: null, email: null, login: null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth,
    },
} as const)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authApi.me()

    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }


}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<AppStoreType, unknown, AnyAction>) => {
    const response = await authApi.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error occurred'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    const response: any = authApi.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}