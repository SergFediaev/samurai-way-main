import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

export const Dialogs = (props: any) => {

    let dialogsData = [
        {
            id: 1,
            name: 'Dimych',
        },
        {
            id: 2,
            name: 'Andrew',
        },
        {
            id: 3,
            name: 'Sasha',
        },
        {
            id: 4,
            name: 'Valera',
        },
        {
            id: 5,
            name: 'Valera',
        },
        {
            id: 6,
            name: 'Viktor',
        },
    ]

    let messagesData = [
        {
            id: 1, message: 'Hi',
        },
        {
            id: 2, message: 'How is your it kamasutra',
        },
        {
            id: 3, message: 'Yo',
        },
        {
            id: 4, message: 'Yo',
        },
        {
            id: 5, message: 'Yo',
        },
        {
            id: 6, message: 'Yo',
        },
    ]


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}

type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id

    return <div className={classes.dialog + ' ' + classes.active}><NavLink
        to={path}>{props.name}</NavLink></div>
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={classes.message}>{props.message}</div>
}