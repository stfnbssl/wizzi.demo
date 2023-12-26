/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi-override\src\portal\NoPortalExample.js.ittf
    utc time: Tue, 18 Jul 2023 08:19:32 GMT
*/
'use strict';
import React from "react";
import {useState} from 'react';
import ModalContent from './ModalContent.js';
export default function NoPortalExample() {
        const [showModal, setShowModal] = useState(false);
        return  (
                <React.Fragment>
                    <button onClick={() => 
                    
                        setShowModal(true)
                    }>
                    Show modal without a portal
                    </button>
                
                {
                    showModal
                     &&  (
                            <ModalContent onClose={() => 
                            
                                setShowModal(false)
                            }>
                            </ModalContent>
                        )
                    
                }
                </React.Fragment>
            )
        ;
    }
