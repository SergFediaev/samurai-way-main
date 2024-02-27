import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

export const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id="1" name="Dimych"/>
                <DialogItem id="2" name="Andrey"/>
                <DialogItem id="3" name="Sasha"/>
                <DialogItem id="4" name="Sveta"/>
                <DialogItem id="5" name="Valera"/>
                <DialogItem id="6" name="Viktor"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How is your it kamasutra"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

type DialogItemPropsType = {
    id: string
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