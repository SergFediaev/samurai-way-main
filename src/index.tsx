import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import {BrowserRouter} from 'react-router-dom'
import {store} from './redux/redux-store'
import {Provider} from 'react-redux'

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>, document.getElementById('customRoot'))

/*
let page = {
    _content: '',
    title: '',
    setContent(content: string) {
        this._content = content
    },
    getContent() {
        return this._content
    },
    render: function () {
        document.write(this._content)
    },
}*/