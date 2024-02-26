import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom'

export const NavBar = () => <nav className={classes.nav}>
    <div className={classes.item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
    <div className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></div>
    <div className={classes.item}><NavLink to="/new" activeClassName={classes.activeLink}>New</NavLink></div>
    <div className={classes.item}><NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink></div>
    <div className={classes.item}><NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink></div>
</nav>