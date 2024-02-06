import React from "react";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    if (props.value === 0) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }

    if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }

    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    } else {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
}

// debugger

type StarPropsType = {
    selected: boolean
}

// const Star = (props: any) => <span>Star *</span>;
function Star(props: StarPropsType) {
    console.log('Star rendering');
    // debugger
    if (props.selected) {
        return <span><b>Star *</b></span>
    } else {
        return <span>Star *</span>
    }
}