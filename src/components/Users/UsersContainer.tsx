import {connect} from 'react-redux'
import {Users} from './Users'
import {AppStoreType} from '../../redux/redux-store'
import {Dispatch} from 'redux'
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setUsersTotalCountActionCreator,
    unfollowActionCreator,
    UserType,
} from '../../redux/users-reducer'

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)