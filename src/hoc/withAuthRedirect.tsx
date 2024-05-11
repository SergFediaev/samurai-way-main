import {Redirect} from 'react-router-dom'
import React, {ComponentType} from 'react'
import {connect} from 'react-redux'
import {AppStoreType} from '../redux/redux-store'

type MapStatePropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStoreType): MapStatePropsForRedirectType => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component: ComponentType<any>) => {

    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}