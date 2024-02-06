import React from 'react';
import logo from './logo.jpg'
import './App.css'

const App = () => {
    return <div className='app-wrapper'>
        <header className='header'>
            <img
                // src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707235200&semt=ais"
                src={logo}
                alt="Logo"/>
        </header>
        <nav className='nav'>
            <div><a href='#'>Profile</a></div>
            <div><a href='#'>Messages</a></div>
            <div><a href='#'>New</a></div>
            <div><a href='#'>Music</a></div>
            <div><a href='#'>Settings</a></div>
        </nav>
        <div className='content'>
            <div><img
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt="Header image"/></div>
            <div>
                <img
                    src="https://asset.kompas.com/crops/-QSHMGMmRvrDcDZeZbRh0wrk4NM=/0x81:466x391/750x500/data/photo/2023/11/09/654c73dbe7559.jpg"
                    width='300px'
                    alt="Avatar"/>
                ava + describe
            </div>
            <div>My posts
                <div>New post</div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    </div>
}

export default App;