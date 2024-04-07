import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {Friend} from '../Friends/Friend'
import {StoreContext} from '../../StoreContext'
import {SideBarType} from '../../redux/store'

export const Navbar = () => {
    return <StoreContext.Consumer>
        {store => <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/new" activeClassName={classes.activeLink}>New</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div>
                <h3>Friends</h3>
                <div className={classes.friends}>
                    {(store.getState().sidebar as SideBarType).friends.map(friend => <Friend
                        key={friend.id}
                        name={friend.name}
                    />)}
                </div>
            </div>
        </nav>}
    </StoreContext.Consumer>
}