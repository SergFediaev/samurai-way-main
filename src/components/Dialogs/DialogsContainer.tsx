import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStoreType} from '../../redux/redux-store'
import {compose, Dispatch} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {ComponentType} from 'react'
import {DialogsPageType, sendMessageCreator} from '../../redux/dialogs-reducer'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

// const AuthRedirectComponent = withAuthRedirect(Dialogs)

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)