import {combineReducers, createStore} from 'redux'
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from './profile-reducer'
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'

export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})

export const store = createStore(reducers)

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

// store.getState().