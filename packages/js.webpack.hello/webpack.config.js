/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\js.webpack.hello\.wizzi\root\webpack.config.js.ittf
    utc time: Wed, 19 Jul 2023 07:41:45 GMT
*/
'use strict';
const path = require('path');
const resolve = path.resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const yaml = require('yamljs');
module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', 
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-source-map', 
    entry: {
        index: './src/index.js'
     }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/, 
                exclude: /(node_modules|(vendor\/.+\.js))/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        cacheDirectory: true
                     }
                 }
             }, 
            {
                test: /\.html$/, 
                use: [
                    {
                        loader: "html-loader"
                     }
                ]
             }, 
            {
                test: /\.css$/, 
                use: [
                    'style-loader', 
                    'css-loader'
                ]
             }, 
            {
                test: /\.yaml$/i, 
                type: 'json', 
                parser: {
                    parse: yaml.parse
                 }
             }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, 
                type: 'asset/resource'
             }
        ]
     }, 
    resolve: {
        modules: [
            path.resolve(__dirname, "src"), 
            "node_modules"
        ], 
        extensions: [
            ".js", 
            ".jsx", 
            ".json"
        ], 
        alias: {
            
         }, 
        fallback: {
            
         }
     }, 
    output: {
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist'), 
        clean: true
     }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'js.webpack.hello', 
            template: './index.html', 
            filename: 'index.html', 
            hash: true
         })
    ], 
    devServer: {
        open: true, 
        static: __dirname
     }, 
    optimization: {
        noEmitOnErrors: true
     }
 };
