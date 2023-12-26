/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi\src\appPortal\map-widget.js.ittf
    utc time: Wed, 19 Jul 2023 07:45:17 GMT
*/
'use strict';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
export function createMapWidget(containerDomNode) {
    const map = L.map(containerDomNode);
    map.setView([
        0, 
        0
    ], 0)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, 
        attribution: '© OpenStreetMap'
     }).addTo(map)
    return map;
}
export function addPopupToMapWidget(map) {
    const popupDiv = document.createElement('div');
    L.popup().setLatLng([
        0, 
        0
    ]).setContent(popupDiv).openOn(map)
    return popupDiv;
}
