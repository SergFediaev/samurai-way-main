import React from 'react'
import './LessonApp.css'
import {Technologies} from '../../Technologies'
import {Footer} from './Footer'
import {Header} from './Header'

export const LessonApp = () => {  // современная запись стрелочной функции.
// const LessonApp = function() { // старая запись анонимной функции.
// function LessonApp()   { // старая запись функции.
    return <div>
        {/*<div className="LessonApp">Hey there</div>*/}
        <Header title="LessonApp title from props "/>
        <Technologies/>
        <Footer/>
        {/*<Rating value={2}/>*/}
        {/*<Accordion title="Title for Acc" collapsed={false}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Accordion title="Second Acc" collapsed={true}/>*/}
    </div>
}

// function Star() {
//     return <div>Start</div>;
// }

const div = <div></div>