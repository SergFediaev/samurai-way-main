import {combineReducers, createStore} from 'redux'
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from './profile-reducer'
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setUsersTotalCountActionCreator,
    toggleIsFetchingActionCreator,
    unfollowActionCreator,
    usersReducer,
} from './users-reducer'

export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

export const store = createStore(reducers)

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof followActionCreator>
    | ReturnType<typeof unfollowActionCreator>
    | ReturnType<typeof setUsersActionCreator>
    | ReturnType<typeof setCurrentPageActionCreator>
    | ReturnType<typeof setUsersTotalCountActionCreator>
    | ReturnType<typeof toggleIsFetchingActionCreator>

// store.getState().