import React from 'react'
import classes from './NavBar.module.css'

export const NavBar = () => <nav className={classes.nav}>
    <div className={classes.item}><a href="/profile">Profile</a></div>
    <div className={classes.item}><a href="/dialogs">Messages</a></div>
    <div className={classes.item}><a href="/new">New</a></div>
    <div className={classes.item}><a href="/music">Music</a></div>
    <div className={classes.item}><a href="/settings">Settings</a></div>
</nav>