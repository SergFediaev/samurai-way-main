import {ActionsTypes, SidebarType} from './store'

const initialState: SidebarType = {friends: []}

const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {
    return state
}

export default sidebarReducer