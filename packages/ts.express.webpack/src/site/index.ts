/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.webpack\.wizzi\src\site\index.ts.ittf
    utc time: Fri, 23 Jun 2023 15:12:42 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {DemoWebpackController} from './controllers/demoWebpack';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new DemoWebpackController()
];
export {siteControllers};
