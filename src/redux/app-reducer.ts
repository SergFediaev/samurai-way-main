import {ActionsTypes, AppStoreType} from './redux-store'
import {AnyAction} from 'redux'
import {getAuthUserData} from './auth-reducer'
import {ThunkDispatch} from 'redux-thunk'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
    initialized: false,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
} as const)

export const initializeApp = () => (dispatch: ThunkDispatch<AppStoreType, unknown, AnyAction>) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}