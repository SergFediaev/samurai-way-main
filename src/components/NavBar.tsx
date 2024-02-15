import React from 'react'
import classes from './NavBar.module.css'

console.log(classes)

const itemStyle = classes.item
const activeStyle = classes.active
const combinedStyles = itemStyle + ' ' + activeStyle
const doubleStyles = `${classes.item} ${classes.active}`

export const NavBar = () => <nav className={classes.nav}>
    <div className={classes.item}><a>Profile</a></div>
    <div className={combinedStyles}><a>Messages</a></div>
    <div className={classes.item}><a>New</a></div>
    <div className={doubleStyles}><a>Music</a></div>
    <div className={classes.item}><a>Settings</a></div>
</nav>