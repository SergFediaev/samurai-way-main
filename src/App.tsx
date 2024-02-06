import React from 'react';
import './App.css';
import Technologies from "./Technologies";
import {Header} from "./Header";
import Footer from "./Footer";

const App = () => {  // современная запись стрелочной фукнции.
// const App = function() { // старая запись анонимной функции.
// function App()   { // старая запись функции.
    return <div>
        {/*<div className="App">Hey there</div>*/}
        <Header title="App title from props "/>
        <Technologies/>
        <Footer/>
        {/*<Rating value={2}/>*/}
        {/*<Accordion title="Title for Acc" collapsed={false}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Accordion title="Second Acc" collapsed={true}/>*/}
    </div>
}

export default App;

// function Star() {
//     return <div>Start</div>;
// }

const div = <div></div>