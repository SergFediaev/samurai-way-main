import {MessageType} from '../components/Dialogs/Dialogs'
import {ActionsTypes, DialogsType} from './state'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state: DialogsType, action: ActionsTypes): DialogsType => {
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