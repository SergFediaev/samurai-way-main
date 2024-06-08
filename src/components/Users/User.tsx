import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import React from 'react'
import {NavLink} from 'react-router-dom'

export const User = (props: any) => {
    const {user} = props

    return <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}
                             alt="User photo"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ?
                        <button disabled={props.followingInProgress.some((id: number) => id === user.id)}
                                onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some((id: any) => id === user.id)} onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
        <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
    </div>
}