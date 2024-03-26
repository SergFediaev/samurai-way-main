import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {Dialogs} from './components/Dialogs/Dialogs'
import {Route} from 'react-router-dom'
import {Profile} from './components/Profile/Profile'
import {New} from './components/New/New'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {ActionType, StateType, StoreType} from './redux/state'

// const ProfileComponent = () => <Profile/>

// const DialogsComponent = () => <Dialogs/>

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
    store: StoreType
}

export const App = ({state, dispatch, store}: AppPropsType) => {
    return <div className="app-wrapper">
        <Header/>
        <NavBar state={state.sidebar}/>
        <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile
                profilePage={state.profilePage}
                dispatch={dispatch}
            />}/>
            <Route path="/dialogs" render={() => <Dialogs
                dispatch={dispatch}
                store={store}
            />}/>
            <Route path="/new" component={New}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
        </div>
    </div>
}