/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\features\wizziFs\index.ts.ittf
    utc time: Thu, 29 Jun 2023 08:52:23 GMT
*/
import {ControllerType} from '../app/types';
import * as wizziFsTypes from './types';
import * as apis from './api/wizziFs';
import * as byHash from './api/byHash';
import {ApiV1WizziFsController} from './controllers/apiv1wizzifs';

const wizziFsControllers: ControllerType[] = [
    new ApiV1WizziFsController()
];

const wizziFsApi = {
    ...apis, 
    ...byHash
 };

export {wizziFsTypes, wizziFsControllers, wizziFsApi};
