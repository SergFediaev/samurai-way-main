import {PostPropsType} from '../components/Profile/Posts/Post/Post'
import {DialogType, MessageType} from '../components/Dialogs/Dialogs'

export type StateType = {
    profilePage: {
        posts: PostPropsType[]
    }
    dialogsPage: {
        messages: MessageType[]
        dialogs: DialogType[]
    }
    sidebar: {
        friends: FriendType[]
    }
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