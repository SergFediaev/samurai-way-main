import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {SideBarType} from '../../redux/store'
import {Friend} from '../Friends/Friend'

export type NavBarPropsType = {
    sidebar: SideBarType
}

export const Navbar = (props: NavBarPropsType) => <nav className={classes.nav}>
    <div className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
    <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></div>
    <div className={classes.item}><NavLink to="/new" activeClassName={classes.activeLink}>New</NavLink></div>
    <div className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink></div>
    <div className={classes.item}><NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink></div>
    <div>
        <h3>Friends</h3>
        <div className={classes.friends}>
            {props.sidebar.friends.map(friend => <Friend
                key={friend.id}
                name={friend.name}
            />)}
        </div>
    </div>
</nav>