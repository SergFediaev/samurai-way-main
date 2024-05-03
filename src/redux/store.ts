import {PostPropsType} from '../components/Profile/Posts/Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from './profile-reducer'
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer'
import {sidebarReducer} from './sidebar-reducer'

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsType
    sidebar: SidebarType
}

type  DialogsType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageBody: string
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}

type SidebarType = {
    friends: FriendType[]
}

type FriendType = {
    id: number
    name: string
}

type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post.', likesCount: 30},
                {id: 3, message: 'Bla.', likesCount: 50},
                {id: 4, message: 'Da.', likesCount: 0},
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Sveta'},
                {id: 2, name: 'Dimych'},
                {id: 3, name: 'Valera'},
            ],
        },
    } as StateType,
    _callSubscriber(state: StateType) {
        console.log('State was changed!')
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsTypes) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
}

// @ts-ignore
window.store = store