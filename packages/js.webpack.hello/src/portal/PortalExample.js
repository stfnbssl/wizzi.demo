/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi-override\src\portal\PortalExample.js.ittf
    utc time: Tue, 18 Jul 2023 08:19:32 GMT
*/
'use strict';
import React from "react";
import {useState} from 'react';
import {createPortal} from 'react-dom';
import ModalContent from './ModalContent.js';
export default function PortalExample() {
        const [showModal, setShowModal] = useState(false);
        return  (
                <React.Fragment>
                    <button onClick={() => 
                    
                        setShowModal(!showModal)
                    }>
                    Show modal using a portal
                    </button>
                
                {
                    showModal
                     && createPortal(
                        <ModalContent onClose={() => 
                        
                            setShowModal(false)
                        }>
                        </ModalContent>
                    , document.body)
                }
                </React.Fragment>
            )
        ;
    }
