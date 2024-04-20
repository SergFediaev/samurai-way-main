import React from 'react'
import {UsersPagePropsType} from './UsersContainer'
import styles from './Users.module.css'
import {mockedUsers} from '../../redux/users-reducer'

export const Users = (props: UsersPagePropsType) => {
    if (props.users.length === 0) props.setUsers(mockedUsers)

    debugger
    return <div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoUrl} className={styles.userPhoto} alt="User photo"/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>

        </div>)}
    </div>
}