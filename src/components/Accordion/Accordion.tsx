import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return <AccordionTitle titleValue={props.title}/>
    } else {
        return <div>
            <AccordionTitle titleValue={props.title}/>
            <AccordionMenu/>
        </div>
    }
}

type AccordionTitlePropsType = {
    titleValue: string
}

const AccordionTitle = (props: AccordionTitlePropsType) =>
    <h3>{console.log('Rendering Acc title')}{props.titleValue} RIGHT?</h3>

// function AccordionTitle(props: any) {
//     return <h3>Title is: {props.title}</h3>
// }

const AccordionMenu = () => <ul>
    {console.log('Rendering Acc menu')}
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

function sum(a: number, b: number) {
    return a + b;
}

sum(10, 5);