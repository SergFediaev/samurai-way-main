import {Component} from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {getAuthUserData, logout} from '../../redux/auth-reducer'
import {AppStoreType} from '../../redux/redux-store'

class HeaderContainer extends Component<any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)