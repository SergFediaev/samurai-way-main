import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {
    addPostActionCreator,
    deletePost,
    profileReducer,
    savePhotoSuccess,
    setStatus,
    setUserProfile,
} from './profile-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess,
    usersReducer,
} from './users-reducer'
import {authReducer, setAuthUserData} from './auth-reducer'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {dialogsReducer, sendMessageCreator} from './dialogs-reducer'
import {appReducer, initializedSuccess} from './app-reducer'

export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
// @ts-ignore
window.__store__ = store

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

// store.getState().