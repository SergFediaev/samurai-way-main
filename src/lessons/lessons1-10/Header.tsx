import React from 'react'

type HeaderPropsType = {
    title: string
}

export function Header(props: HeaderPropsType) {
    console.log('Header rendering')
    // return <>{props.title}</>
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">News Feed</a>
            <a href="#s">Messages</a>
        </div>
    )
}