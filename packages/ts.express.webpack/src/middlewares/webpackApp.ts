/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.webpack\.wizzi\src\middlewares\webpackApp.ts.ittf
    utc time: Fri, 23 Jun 2023 15:12:42 GMT
*/
import path from 'path';
import {Application} from 'express';
import express from 'express';
import webpack from 'webpack';
import {Configuration} from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import {config as config_hello} from '../site/webpacks/hello/webpack.config';
console.log('WebpackAppMiddleware config_hello', config_hello, __filename);

export const WebpackAppMiddleware = (app: Application) => {

    const outputPublicPath = (config_hello as webpack.Configuration).output.publicPath as string;
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
        app.use('/webpacks/hello/dist', express.static(outputPublicPath))
    }
    else {
        const compiler: webpack.Compiler = webpack(config_hello as webpack.Configuration);
        app.use(webpackDevMiddleware(compiler, {
            writeToDisk: !!true, 
            publicPath: outputPublicPath
         }))
        console.log('WebpackAppMiddleware.pack hello on path', outputPublicPath, 'writeToDisk',  !!true, __filename);
    }
}
;
