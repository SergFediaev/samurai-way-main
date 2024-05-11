import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStoreType} from '../../redux/redux-store'
import {Dispatch} from 'redux'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)