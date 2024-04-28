import {ActionsTypes} from './redux-store'

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const MOCKED_AVATAR = 'https://asset.kompas.com/crops/-QSHMGMmRvrDcDZeZbRh0wrk4NM=/0x81:466x391/750x500/data/photo/2023/11/09/654c73dbe7559.jpg'

export const mockedUsers: UserType[] = [
    {
        id: 1,
        photos: {
            small: MOCKED_AVATAR,
            large: MOCKED_AVATAR,
        },
        followed: false,
        name: 'Dmitry',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'},
    },
    {
        id: 2,
        photos: {
            small: MOCKED_AVATAR,
            large: MOCKED_AVATAR,
        },
        followed: false,
        name: 'Sasha',
        status: 'I am a boss',
        location: {city: 'Moscow', country: 'Russia'},
    },
    {
        id: 3,
        photos: {
            small: MOCKED_AVATAR,
            large: MOCKED_AVATAR,
        },
        followed: false,
        name: 'Andrew',
        status: 'I am a boss',
        location: {city: 'Kiev', country: 'Ukraine'},
    },
]

const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}

type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user),
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
}

export const followActionCreator = (userId: number) => ({
    type: FOLLOW,
    userId,
} as const)

export const unfollowActionCreator = (userId: number) => ({
    type: UNFOLLOW,
    userId,
} as const)

export const setUsersActionCreator = (users: UserType[]) => ({
    type: SET_USERS,
    users,
} as const)

export const setCurrentPageActionCreator = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
} as const)

export const setUsersTotalCountActionCreator = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
} as const)