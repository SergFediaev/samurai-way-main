import {ActionsTypes} from './redux-store'

export type SidebarType = {
    friends: FriendType[]
}

type FriendType = {
    id: number
    name: string
}

const initialState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 1, name: 'Sveta'},
        {id: 1, name: 'Viktor'},
        {id: 1, name: 'Valera'},
        {id: 1, name: 'Vika'},
    ] as FriendType[],
}

type InitialStateType = typeof initialState

export const sidebarReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    return state
}