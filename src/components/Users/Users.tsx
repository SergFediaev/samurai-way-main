import styles from './Users.module.css'
import {UserType} from '../../redux/users-reducer'
import userPhoto from '../../assets/images/user.png'
import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

export const Users = (props: any) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []

    for (let iteration = 1; iteration <= pagesCount; iteration++) {
        pages.push(iteration)
    }

    return <div>
        <div>
            {pages.map((page, index) => <span key={index} className={props.currentPage === page
                ? styles.selectedPage
                : undefined}
                                              onClick={() => props.onPageChanged(page)}>{page}</span>)}
        </div>
        {props.users.map((user: UserType) => <div key={user.id}>
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
                                    props.toggleFollowingProgress(true, user.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true, headers: {
                                            'API-KEY': '6fb6732c-0aa4-412a-bae5-0f04f4fc913f',
                                        },
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }

                                        props.toggleFollowingProgress(false, user.id)
                                    })
                                }}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some((id: any) => id === user.id)} onClick={() => {
                            props.toggleFollowingProgress(true, user.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                withCredentials: true, headers: {
                                    'API-KEY': '6fb6732c-0aa4-412a-bae5-0f04f4fc913f',
                                },
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(user.id)
                                }
                                props.toggleFollowingProgress(false, user.id)
                            })
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
        </div>)}
    </div>
}