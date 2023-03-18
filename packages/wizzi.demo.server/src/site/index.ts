/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\.wizzi\src\site\index.ts.ittf
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {ProductionsController} from './controllers/productions';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new ProductionsController()
];
export {siteControllers};
