import React from 'react'
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {DialogsPageType} from '../../redux/dialogs-reducer'
import {DialogsPagePropsType} from './DialogsContainer'
import {Field, reduxForm} from 'redux-form'

export const Dialogs = (props: DialogsPagePropsType) => {
    const state = props.dialogsPage as DialogsPageType

    const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    const messagesElements = state.messages.map(message => <Message key={message.id} message={message.message}/>)

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    </div>
}

const AddMessageForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name="newMessageBody"/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm)