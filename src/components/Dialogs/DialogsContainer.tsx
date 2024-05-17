import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStoreType} from '../../redux/redux-store'
import {compose, Dispatch} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {ComponentType} from 'react'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

// const AuthRedirectComponent = withAuthRedirect(Dialogs)

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)