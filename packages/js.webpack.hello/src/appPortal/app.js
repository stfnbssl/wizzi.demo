/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi\src\appPortal\app.js.ittf
    utc time: Wed, 19 Jul 2023 07:45:17 GMT
*/
'use strict';
import {useRef, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {createMapWidget, addPopupToMapWidget} from './map-widget.js';
export default function Map() {
        const containerRef = useRef(null);
        const mapRef = useRef(null);
        const [popupContainer, setPopupContainer] = useState(null);
        useEffect(() => {
        
            if (mapRef.current === null) {
                const map = createMapWidget(containerRef.current);
                mapRef.current = map;
                const popupDiv = addPopupToMapWidget(map);
                setPopupContainer(popupDiv);
            }
        }
        , [])
        return  (
                <div style={{
                    width: 250, 
                    height: 250
                 }} ref={containerRef}>
                {
                    popupContainer !== null
                     && createPortal(
                        <p>
                        Hello from React!
                        </p>
                    , popupContainer)
                }
                </div>
            )
        ;
    }
