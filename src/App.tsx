import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {NavBar} from './components/NavBar/NavBar'
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import {Profile} from './components/Profile/Profile'
import {New} from './components/New/New'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {StateType} from './redux/state'

// const ProfileComponent = () => <Profile/>

// const DialogsComponent = () => <Dialogs/>

type AppPropsType = {
    state: StateType
}

export const App = ({state}: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar state={state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile state={state.profilePage}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path="/new" component={New}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}