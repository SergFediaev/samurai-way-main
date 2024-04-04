import {ActionsTypes, SideBarType} from './store'

const initialState: SideBarType = {friends: []}

const sidebarReducer = (state: SideBarType = initialState, action: ActionsTypes): SideBarType => {
    return state
}

export default sidebarReducer