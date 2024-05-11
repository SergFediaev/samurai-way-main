import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {DialogsPageType} from '../../redux/dialogs-reducer'
import {DialogsPagePropsType} from './DialogsContainer'

export const Dialogs = (props: DialogsPagePropsType) => {
    const state = props.dialogsPage as DialogsPageType

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