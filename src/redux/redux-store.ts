import {applyMiddleware, combineReducers, createStore} from 'redux'
import {addPostActionCreator, deletePost, profileReducer, setStatus, setUserProfile} from './profile-reducer'
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

export const store = createStore(reducers, applyMiddleware(thunk))

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

// store.getState().