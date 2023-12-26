/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\.wizzi\src\features\packiEdit\index.ts.ittf
*/
import {ControllerType} from '../app/types';
import * as packiEditTypes from './types';
import {LocalEditController} from './controllers/localedit';
import {ApiV1LocalController} from './controllers/apiv1local';
const packiEditControllers: ControllerType[] = [
    new LocalEditController(), 
    new ApiV1LocalController()
];
export {packiEditTypes, packiEditControllers};
