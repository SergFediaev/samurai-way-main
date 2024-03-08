import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import {DialogType, MessageType} from './components/Dialogs/Dialogs'
import {PostPropsType} from './components/Profile/Posts/Post/Post'

export type DataType = {
    posts: PostPropsType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

const data: DataType = {
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
}

ReactDOM.render(<App data={data}/>, document.getElementById('customRoot'))