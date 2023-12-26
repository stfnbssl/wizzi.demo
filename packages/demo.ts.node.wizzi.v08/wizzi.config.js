/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.meta/meta-templates/__temp/ts-node/demo.wizzi.v08/wizzi.config.js.ittf
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "demo.ts.node.wizzi.v08/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: __dirname, 
    plugins: [
        './wizzi.plugin.js/index.js', 
        './wizzi.plugin.ts/index.js', 
        './wizzi.plugin.json/index.js', 
        './wizzi.plugin.yaml/index.js', 
        './wizzi.plugin.ittf/index.js', 
        './wizzi.plugin.xml/index.js', 
        './wizzi.plugin.text/index.js', 
        './wizzi.plugin.md/index.js', 
        './wizzi.plugin.html/index.js', 
        './wizzi.plugin.css/index.js', 
        './wizzi.plugin.svg/index.js', 
        './wizzi.plugin.wzjob/index.js'
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi.plugins/packages", 
    schemas: [
        
    ], 
    globalContext: {
        wzConfigIsDevelopment: true, 
        wzConfigIsPackageDeploy: false
     }
 };
