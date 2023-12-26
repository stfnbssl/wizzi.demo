/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi\src\index.js.ittf
    utc time: Wed, 19 Jul 2023 07:45:17 GMT
*/
'use strict';
import React from 'react';
import {createRoot} from "react-dom/client";
import './style.css';
import Icon from './icon.png';
import jsonData from './data.json';
import yamlData from './data.yaml';
console.log('jsonData', jsonData);
console.log('yamlData', yamlData);
function Hello() {
    return  (
            <div className="hello">
                <h1>
                Hello webpack
                </h1>
            
                <img src={Icon}>
                </img>
            
            </div>
        )
    ;
}
// import Hello from "./Hello"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Hello />
    )
