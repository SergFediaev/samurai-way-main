import React from 'react'
import classes from './Profile.module.css'
import {Posts} from './Posts/Posts'

export const Profile = () => <div className={classes.content}>
    <div>
        <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="Header image"/>
    </div>
    <div>Ava + description</div>
    <Posts/>
</div>