/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi-override\src\state\Gallery.js.ittf
    utc time: Tue, 18 Jul 2023 08:19:32 GMT
*/
'use strict';
import React, {useState} from 'react';
import {sculptureList} from './data.js';
export default function Gallery() {
        const [index, setIndex] = useState(0);
        function handleClick() {
            setIndex(index + 1);
        }
        let sculpture = sculptureList[index];
        return  (
                <React.Fragment>
                    <button onClick={handleClick}>
                    Next
                    </button>
                
                    <h2>
                        <i>
                        {sculpture.name}
                        </i>
                    
                    by
                    {sculpture.artist}
                    </h2>
                
                    <h3>
                    (
                    {index + 1}
                    of
                    {sculptureList.length}
                    )
                    </h3>
                
                    <img src={sculpture.url} alt={sculpture.alt}>
                    </img>
                
                    <p>
                    {sculpture.description}
                    </p>
                
                </React.Fragment>
            )
        ;
    }
