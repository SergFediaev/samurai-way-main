import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {DialogsType} from '../../redux/store'

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsType
}

export const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage as DialogsType

    const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>)
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const body = event.target.value
        props.updateNewMessageBody(body)
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
                <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    </div>
}