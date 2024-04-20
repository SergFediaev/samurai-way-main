import {ActionsTypes} from './redux-store'

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

const MOCKED_AVATAR = 'https://asset.kompas.com/crops/-QSHMGMmRvrDcDZeZbRh0wrk4NM=/0x81:466x391/750x500/data/photo/2023/11/09/654c73dbe7559.jpg'

export const mockedUsers: UserType[] = [
    {
        id: 1,
        photoUrl: MOCKED_AVATAR,
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus'},
    },
    {
        id: 2,
        photoUrl: MOCKED_AVATAR,
        followed: false,
        fullName: 'Sasha',
        status: 'I am a boss',
        location: {city: 'Moscow', country: 'Russia'},
    },
    {
        id: 3,
        photoUrl: MOCKED_AVATAR,
        followed: false,
        fullName: 'Andrew',
        status: 'I am a boss',
        location: {city: 'Kiev', country: 'Ukraine'},
    },
]

const initialState = {
    users: [] as UserType[],
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
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
            return {...state, users: [...state.users, ...action.users]}
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