import React, {Component, ComponentType} from 'react'
import './App.css'
import {HashRouter, Route, withRouter} from 'react-router-dom'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {NavbarContainer} from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import {AppStoreType, store} from './redux/redux-store'
import {Preloader} from './components/common/Preloader/Preloader'
import {New} from './components/New/New'
import {withSuspense} from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

// const ProfileComponent = () => <Profile/>
// const DialogsComponent = () => <Dialogs/>

class App extends Component<any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                <Route path="/new" component={New}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const SamuraiJsApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}