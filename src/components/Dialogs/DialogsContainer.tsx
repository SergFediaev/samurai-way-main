import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import {DialogsType} from '../../redux/store'
import {Dialogs} from './Dialogs'

type DialogsContainerPropsType = {
    store: any
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState().dialogsPage as DialogsType

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
}