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

export const withAuthRedirect = <T, >(Component: ComponentType<T>) => {
    class RedirectComponent extends React.Component<MapStatePropsForRedirectType> {
        render() {
            const {isAuth, ...restProps} = this.props

            if (!isAuth) return <Redirect to={'/login'}/>

            return <Component {...restProps as T}/>
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}