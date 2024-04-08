import {connect} from 'react-redux'
import {Navbar} from './Navbar'
import {AppStoreType} from '../../redux/redux-store'
import {SidebarType} from '../../redux/sidebar-reducer'

type MapStateToPropsType = {
    sidebar: SidebarType
}

export type NavbarPagePropsType = MapStateToPropsType

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        sidebar: state.sidebar,
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)