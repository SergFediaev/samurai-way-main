import {ActionsTypes} from './redux-store'
import {Dispatch} from 'redux'
import {usersApi} from '../api/api'
import {updateObjectInArray} from '../utils/object-helpers'

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
    isFetching: false,
    followingInProgress: [] as Array<number>,
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
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}),
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => ({
    type: FOLLOW,
    userId,
} as const)

export const unfollowSuccess = (userId: number) => ({
    type: UNFOLLOW,
    userId,
} as const)

export const setUsers = (users: UserType[]) => ({
    type: SET_USERS,
    users,
} as const)

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
} as const)

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
} as const)

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
} as const)

export const requestUsers = (page: number, pageSize: number) =>
    async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        const data = await usersApi.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => void, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response: any = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId: number) =>
    async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), followSuccess)
    }

export const unfollow = (userId: number) =>
    async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), unfollowSuccess)
    }