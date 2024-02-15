import React from 'react'
import classes from './Profile.module.css'

export const Profile = () => <div className={classes.content}>
    <div>
        <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="Header image"/>
    </div>
    <div>
        <img
            src="https://asset.kompas.com/crops/-QSHMGMmRvrDcDZeZbRh0wrk4NM=/0x81:466x391/750x500/data/photo/2023/11/09/654c73dbe7559.jpg"
            width="300px"
            alt="Avatar"/>
        Ava + description
    </div>
    <div>My posts
        <div className={classes.posts}>New post</div>
        <div>
            <div className={classes.item}>Post 1</div>
            <div className={classes.item}>Post 2</div>
            <div className={classes.item}>Post 3</div>
        </div>
    </div>
</div>