import React from 'react'
import userPhoto from '../../assets/images/user.png'
import styles from './Users.module.css'
import axios from 'axios'
import {UserType} from '../../redux/users-reducer'

export class Users extends React.Component<any> {
    componentDidMount() {
        console.log('componentDidMount() Users')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(page => <span className={this.props.currentPage === page ? styles.selectedPage : undefined}
                                         onClick={() => this.onPageChanged(page)}>{page}</span>)}
            </div>
            {this.props.users.map((user: UserType) => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}
                         alt="User photo"/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
}