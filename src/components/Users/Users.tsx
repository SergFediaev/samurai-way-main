import styles from './Users.module.css'
import {UserType} from '../../redux/users-reducer'
import userPhoto from '../../assets/images/user.png'
import React from 'react'
import {NavLink} from 'react-router-dom'

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
                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
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