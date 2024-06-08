import {UserType} from '../../redux/users-reducer'
import React from 'react'
import {Paginator} from '../common/Paginator/Paginator'
import {User} from './User'

export const Users = (props: any) => {
    return <div>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}/>
        {props.users.map((user: UserType) => <User user={user}
                                                   followingInProgress={props.followingInProgress}
                                                   unfollow={props.unfollow}
                                                   follow={props.follow}/>)}
    </div>
}