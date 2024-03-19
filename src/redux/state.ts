import {PostPropsType} from '../components/Profile/Posts/Post/Post'
import {DialogType, MessageType} from '../components/Dialogs/Dialogs'

let rerenderEntireTree = (state: StateType) => {
    console.log('State was changed!')
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: {
        messages: MessageType[]
        dialogs: DialogType[]
    }
    sidebar: {
        friends: FriendType[]
    }
}

export type ProfilePageType = {
    posts: PostPropsType[]
    newPostText: string
}

export type FriendType = {
    id: number
    name: string
}

export const state: StateType = {
    profilePage: {
        posts: [
            {
                id: 1, message: 'Hi, how are you', likesCount: 12,
            },
            {
                id: 2, message: 'It\'s my first post.', likesCount: 30,
            },
            {
                id: 3, message: 'Bla.', likesCount: 50,
            },
            {
                id: 4, message: 'Da.', likesCount: 0,
            },
        ],
        newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Dimych',
            },
            {
                id: 2,
                name: 'Andrew',
            },
            {
                id: 3,
                name: 'Sveta',
            },
            {
                id: 4,
                name: 'Sasha',
            },
            {
                id: 5,
                name: 'Valera',
            },
            {
                id: 6,
                name: 'Viktor',
            },
        ],
        messages: [
            {
                id: 1, message: 'Hi',
            },
            {
                id: 2, message: 'How is your it kamasutra',
            },
            {
                id: 3, message: 'Yo',
            },
            {
                id: 4, message: 'Yo',
            },
            {
                id: 5, message: 'Yo',
            },
            {
                id: 6, message: 'Yo',
            },
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Sveta'},
            {id: 2, name: 'Dimych'},
            {id: 3, name: 'Valera'},
        ],
    },
}

export const addPost = () => {
    const newPost: PostPropsType = {
        id: ++state.profilePage.posts.length,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const addMessage = (message: MessageType) => {
    state.dialogsPage.messages.push(message)
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}

// window.state = state