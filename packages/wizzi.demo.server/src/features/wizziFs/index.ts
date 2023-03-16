/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\.wizzi\src\features\wizziFs\index.ts.ittf
*/
import {ControllerType} from '../app/types';
import * as wizziFsTypes from './types';
import * as wizziFsApi from './api/wizziFs';
import {ApiV1WizziFsController} from './controllers/apiv1wizzifs';

const wizziFsControllers: ControllerType[] = [
    new ApiV1WizziFsController()
];

export {wizziFsTypes, wizziFsControllers, wizziFsApi};
