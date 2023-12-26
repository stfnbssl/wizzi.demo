/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.webpack\.wizzi\src\site\webpacks\hello\webpack.config.ts.ittf
    utc time: Fri, 23 Jun 2023 15:12:42 GMT
*/
import path from 'path';
import {Configuration} from 'webpack';
export const config: Configuration = {
    entry: {
        main: path.join(__dirname, "./index.js")
     }, 
    output: {
        filename: "[name].js"
     }, 
    mode: "development", 
    devtool: "inline-source-map", 
    module: {
        rules: [
            {
                test: /\.ts$/, 
                use: [
                    {
                        loader: "ts-loader"
                     }
                ]
             }, 
            {
                test: /\.js$/, 
                exclude: [
                    /node_modules/
                ], 
                use: [
                    {
                        loader: "babel-loader"
                     }
                ]
             }
        ]
     }, 
    resolve: {
        extensions: [
            ".ts", 
            ".js"
        ], 
        modules: [
            "src", 
            "node_modules"
        ], 
        alias: {
            
         }
     }
 };
