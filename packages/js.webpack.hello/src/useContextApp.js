/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi-override\src\useContextApp.js.ittf
    utc time: Tue, 18 Jul 2023 08:19:32 GMT
*/
'use strict';
import React from "react";
import {createContext, useContext, useState} from 'react';
const ThemeContext = createContext(null);
export default function MyApp() {
        const [theme, setTheme] = useState('light');
        return  (
                <ThemeContext.Provider value={theme}>
                    <Form />
                        <label>
                            <input type="checkbox" checked={theme === 'dark'} onChange={e => 
                            
                                setTheme(e.target.checked ? 'dark' : 'light')
                            }>
                            </input>
                        
                        Use dark mode
                        </label>
                    
                    </ThemeContext.Provider>
                )
            ;
        }
    function Form({children}) {
        return  (
                <Panel title="Welcome">
                    <Button>
                    Sign up
                    </Button>
                
                    <Button>
                    Log in
                    </Button>
                
                </Panel>
            )
        ;
    }
    function Panel({title, children}) {
        const theme = useContext(ThemeContext);
        const className = 'panel-' + theme;
        return  (
                <section className={className}>
                    <h1>
                    {title}
                    </h1>
                
                {children}
                </section>
            )
        ;
    }
    function Button({children}) {
        const theme = useContext(ThemeContext);
        const className = 'button-' + theme;
        return  (
                <button className={className}>
                {children}
                </button>
            )
        ;
    }
