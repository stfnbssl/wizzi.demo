/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi-override\src\tasks\TasksApp.js.ittf
    utc time: Tue, 18 Jul 2023 08:19:32 GMT
*/
'use strict';
import React from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import {TasksProvider} from './TasksContext.js';
export default function TaskApp() {
        return  (
                <TasksProvider>
                    <h1>
                    Day off in Kyoto
                    </h1>
                
                    <AddTask />
                        <TaskList />
                        </TasksProvider>
                    )
                ;
            }
