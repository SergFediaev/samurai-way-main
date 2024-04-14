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
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Vika'},
    ] as FriendType[],
}

type InitialStateType = typeof initialState

export const sidebarReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    return state
}