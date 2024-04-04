import {MessageType} from '../components/Dialogs/Dialogs'
import {ActionsTypes, DialogsType} from './store'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState: DialogsType = {
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
    newMessageText: '',
}

const dialogsReducer = (state: DialogsType = initialState, action: ActionsTypes): DialogsType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        case SEND_MESSAGE:
            const text = state.newMessageText
            state.newMessageText = ''
            state.messages.push({
                id: ++state.messages.length,
                message: text,
            } as MessageType)
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
} as const)

export const updateNewMessageTextCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text,
} as const)

export default dialogsReducer