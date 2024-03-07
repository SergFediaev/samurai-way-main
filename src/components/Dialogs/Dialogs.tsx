import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export const Dialogs = (props: any) => {

    let dialogs: DialogType[] = [
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
            name: 'Sveta',
        },
        {
            id: 4,
            name: 'Sasha',
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

    let dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messages: MessageType[] = [
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

    let messagesElements = messages.map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
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