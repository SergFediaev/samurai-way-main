import {ActionsTypes} from './redux-store'

export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ] as DialogType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ] as MessageType[],
}

type InitialStateType = typeof initialState

const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const body = action.newMessageBody

            return {
                ...state,
                messages: [...state.messages, {
                    id: ++state.messages.length,
                    message: body,
                }],
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({
    type: SEND_MESSAGE,
    newMessageBody,
} as const)