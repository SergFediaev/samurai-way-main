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
import {DataType} from './index'

// const ProfileComponent = () => <Profile/>

// const DialogsComponent = () => <Dialogs/>

type AppPropsType = {
    data: DataType
}

export const App = ({data}: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile posts={data.posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogs={data.dialogs}
                        messages={data.messages}
                    />}/>
                    <Route path="/new" component={New}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}