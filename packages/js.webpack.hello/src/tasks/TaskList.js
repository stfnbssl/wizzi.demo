/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi-override\src\tasks\TaskList.js.ittf
    utc time: Tue, 18 Jul 2023 08:19:32 GMT
*/
'use strict';
import React, {useState} from 'react';
import {useTasks, useTasksDispatch} from './TasksContext.js';

export default function TaskList() {
        const tasks = useTasks();
        return  (
                <ul>
                {
                    tasks.map((task) =>  (
                            <li key={task.id}>
                                <Task task={task}>
                                </Task>
                            
                            </li>
                        )
                    )
                }
                </ul>
            )
        ;
    }

function Task({task}) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent =  (
            <React.Fragment>
                <input value={task.text} onChange={e => 
                
                    dispatch({
                        type: 'changed', 
                        task: {
                            ...task, 
                            text: e.target.value
                         }
                     })
                }>
                </input>
            
                <button onClick={() => 
                
                    setIsEditing(false)
                }>
                Save
                </button>
            
            </React.Fragment>
        )
        ;
    }
    else {
        taskContent =  (
            <React.Fragment>
            {task.text}
                <button onClick={() => 
                
                    setIsEditing(true)
                }>
                Edit
                </button>
            
            </React.Fragment>
        )
        ;
    }
    return  (
            <label>
                <input type="checkbox" checked={task.done} onChange={e => 
                
                    dispatch({
                        type: 'changed', 
                        task: {
                            ...task, 
                            done: e.target.checked
                         }
                     })
                }>
                </input>
            
            {taskContent}
                <button onClick={() => 
                
                    dispatch({
                        type: 'deleted', 
                        id: task.id
                     })
                }>
                Delete
                </button>
            
            </label>
        )
    ;
}
