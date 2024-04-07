import {SidebarType} from '../../redux/store'
import {connect} from 'react-redux'
import {Navbar} from './Navbar'

const mapStateToProps = (state: any) => {
    return {
        sidebar: state.sidebar as SidebarType,
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)