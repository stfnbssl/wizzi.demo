/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi-override\src\tasks\AddTask.js.ittf
    utc time: Tue, 18 Jul 2023 08:19:32 GMT
*/
'use strict';
import React, {useState} from 'react';
import {useTasksDispatch} from './TasksContext.js';

export default function AddTask() {
        const [text, setText] = useState('');
        const dispatch = useTasksDispatch();
        return  (
                <React.Fragment>
                    <input placeholder="Add task" value={text} onChange={e => 
                    
                        setText(e.target.value)
                    }>
                    </input>
                
                    <button onClick={() => {
                    
                        setText('');
                        dispatch({
                            type: 'added', 
                            id: nextId++, 
                            text
                         })
                    }
                    }>
                    Add
                    </button>
                
                </React.Fragment>
            )
        ;
    }

let nextId = 3;
