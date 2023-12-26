/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\middlewares\bodyParser.ts.ittf
    utc time: Thu, 29 Jun 2023 08:52:23 GMT
*/
import {Application} from 'express';
import * as bodyParser from 'body-parser';
import {MiddlewareType} from '../features/app/types';

// Node.js request body parsing middleware which parses the incoming request body before your handlers,
// and make it available under req.body property. It simplifies the incoming request.
export const BodyParserMiddleware: MiddlewareType = (app: Application) => {

    app.use(bodyParser.json({
        limit: '50mb'
     }))
    app.use(bodyParser.urlencoded({
        limit: '50mb', 
        extended: true
     }))
    console.log("[32m%s[0m", 'BodyParserMiddleware installed');
}
;
