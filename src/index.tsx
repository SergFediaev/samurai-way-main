import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('customRoot'));
let a = {};

a = Boolean;

a = "123";

a = 134;

let b = {
    name: "sfe",
    age: "24",
    obj: {
        innerVal: "fs",
        secondVal: 1324
    }
}

/*b = {
    name: "1234",
    age: "234"
};*/

let c;

let arr: Array<number | string | boolean>;
arr = [1, 2, 4, 5]
arr = ["sefsef", "lol"]
arr = [true, false]