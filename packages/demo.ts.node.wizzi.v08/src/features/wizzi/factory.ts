/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\demo.ts.node.wizzi.v08\.wizzi\src\features\wizzi\factory.ts.ittf
    utc time: Mon, 10 Apr 2023 12:25:06 GMT
*/
import path from 'path';
import wizzi from '@wizzi/factory';
import {fSystem} from '@wizzi/utils';
import {JsonComponents, JsonDocumentDto, JsonFs} from '@wizzi/repo';
import {config as appConfig} from '../config';
import * as wizziMaps from './maps';
import {JsonWizziFactory, FilesystemWizziFactory} from './types';

const myname = 'features/wizzi/factory';

export async function createFilesystemFactoryWithParameters(pluginsBaseFolder: string, plugins: string[], globalContext?: { 
    [k: string]: any;
}):  Promise<wizzi.WizziFactory> {

    return new Promise((resolve, reject) => 
        
            wizzi.fsFactory({
                repo: {
                    storeKind: "filesystem"
                 }, 
                plugins: {
                    items: plugins, 
                    pluginsBaseFolder: pluginsBaseFolder
                 }, 
                globalContext: globalContext
             }, function(err: any, wf: wizzi.WizziFactory) {
            
                if (err) {
                    return reject(err);
                }
                return resolve(wf);
            })
        );
}
export async function createFilesystemFactory(globalContext?: { 
    [k: string]: any;
}):  Promise<wizzi.WizziFactory> {

    const gc: { 
        [k: string]: any;
    } = {};
    if (appConfig.isWizziDev) {
        gc['isWizziStudio'] = true;
    }
    return new Promise((resolve, reject) => 
        
            wizzi.fsFactory({
                repo: {
                    storeKind: "filesystem"
                 }, 
                plugins: {
                    items: [
                        './wizzi.plugin.css/index.js', 
                        './wizzi.plugin.graphql/index.js', 
                        './wizzi.plugin.html/index.js', 
                        './wizzi.plugin.ittf/index.js', 
                        './wizzi.plugin.js/index.js', 
                        './wizzi.plugin.ts/index.js', 
                        './wizzi.plugin.json/index.js', 
                        './wizzi.plugin.md/index.js', 
                        './wizzi.plugin.text/index.js', 
                        './wizzi.plugin.svg/index.js', 
                        './wizzi.plugin.xml/index.js', 
                        './wizzi.plugin.yaml/index.js'
                    ], 
                    pluginsBaseFolder: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages'
                 }, 
                globalContext: Object.assign({}, gc, globalContext || {})
             }, function(err: any, wf: wizzi.WizziFactory) {
            
                if (err) {
                    return reject(err);
                }
                resolve(wf);
            })
        );
}

