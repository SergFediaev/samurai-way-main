import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import {DialogsType} from '../../redux/store'
import {StoreContext} from '../../StoreContext'
import {Dialogs} from './Dialogs'

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            const onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage as DialogsType}/>
        }}
    </StoreContext.Consumer>
}