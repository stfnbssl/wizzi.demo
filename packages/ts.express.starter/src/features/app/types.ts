/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\features\app\types.ts.ittf
    utc time: Thu, 29 Jun 2023 08:52:23 GMT
*/
import express from 'express';
import {ConfigType} from '../config';
export type ModelBuilderType = { 
    buildModel: (options?: any) => void;
    applyExtraSetup: (options?: any) => void;
};
export type ApiType = { 
    name: string;
    initialize: (app: express.Application, initValues: AppInitializerType) => void;
};
export type ControllerType = { 
    path: string;
    router: express.Router;
    initialize: (app: express.Application, initValues: AppInitializerType) => void;
};
export type MiddlewareType = (app: express.Application) => void;
export type AppInitializerType = { 
    config: ConfigType;
    globalApi: any;
    apis: ApiType[];
    controllers: ControllerType[];
    middlewaresPre: MiddlewareType[];
    middlewaresPost: MiddlewareType[];
};
