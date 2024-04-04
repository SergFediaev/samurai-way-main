import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogs-reducer'
import {ActionsTypes, DialogsType} from '../../redux/store'

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type DialogsPropsType = {
    dispatch: (action: ActionsTypes) => void
    store: any
}

export const Dialogs = ({dispatch, store}: DialogsPropsType) => {
    const state = store.getState().dialogsPage as DialogsType
    const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>)
    const newMessageText = state.newMessageText

    const onSendMessageClick = () => dispatch(sendMessageCreator())

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value
        dispatch(updateNewMessageTextCreator(text))
    }

    return <>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageText}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}