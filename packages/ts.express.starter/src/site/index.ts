/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\site\index.ts.ittf
    utc time: Thu, 29 Jun 2023 08:52:23 GMT
*/
import {ControllerType} from '../features/app';
import {HomeController} from './controllers/home';
import {DemoHomeController} from './controllers/demoHome';
import {DemoWizziController} from './controllers/demoWizzi';
import {DocsController} from './controllers/wizziDocs';
import {PackiProductionsController} from './controllers/packiProductions';
const siteControllers: ControllerType[] = [
    new HomeController(), 
    new DemoHomeController(), 
    new DemoWizziController(), 
    new DocsController(), 
    new PackiProductionsController()
];
export {siteControllers};
