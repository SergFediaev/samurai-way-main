import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Route} from 'react-router-dom'
import {Profile} from './components/Profile/Profile'
import {New} from './components/New/New'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {ActionsTypes, StateType} from './redux/store'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'
import {Navbar} from './components/Navbar/Navbar'

// const ProfileComponent = () => <Profile/>
// const DialogsComponent = () => <Dialogs/>

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
    store: any
}

export const App = (props: AppPropsType) => {
    return <div className="app-wrapper">
        <Header/>
        <Navbar sidebar={props.state.sidebar}/>
        <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile store={props.store}/>}/>
            <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
            <Route path="/new" component={New}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
        </div>
    </div>
}