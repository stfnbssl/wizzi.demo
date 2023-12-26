/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.webpack\.wizzi\src\features\wizzi\factory.ts.ittf
    utc time: Fri, 23 Jun 2023 15:12:42 GMT
*/
import path from 'path';
import wizzi from '@wizzi/factory';
import {fSystem} from '@wizzi/utils';
import {JsonComponents, JsonDocumentDto, JsonFs} from '@wizzi/repo';
import {packiFilePrefix} from '../config/env';
import {packiTypes} from '../packi';
import {config as appConfig} from '../config';
import * as wizziMaps from './maps';
import {JsonWizziFactory, FilesystemWizziFactory} from './types';

const myname = 'features/wizzi/factory';

function getWzCtxFactoryPlugins() {

    return {
            items: [
                './wizzi.plugin.css/index.js', 
                './wizzi.plugin.html/index.js', 
                './wizzi.plugin.ittf/index.js', 
                './wizzi.plugin.js/index.js', 
                './wizzi.plugin.json/index.js', 
                './wizzi.plugin.md/index.js', 
                './wizzi.plugin.svg/index.js', 
                './wizzi.plugin.text/index.js', 
                './wizzi.plugin.ts/index.js', 
                './wizzi.plugin.xml/index.js', 
                './wizzi.plugin.yaml/index.js'
            ], 
            pluginsBaseFolder: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages'
         };
}

function getWzCtxMetaPlugins() {

    return null;
}

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
export async function createFilesystemFactory(factoryPlugins?: any, metaPlugins?: any, globalContext?: { 
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
                plugins: factoryPlugins ? factoryPlugins : getWzCtxFactoryPlugins(), 
                metaPlugins: metaPlugins ? metaPlugins : getWzCtxMetaPlugins(), 
                globalContext: Object.assign({}, gc, globalContext || {})
             }, function(err: any, wf: wizzi.WizziFactory) {
            
                if (err) {
                    return reject(err);
                }
                resolve(wf);
            })
        );
}

export function packiFilesToJsonDocuments(files: packiTypes.PackiFiles):  JsonDocumentDto[] {

    const jsonDocuments: JsonDocumentDto[] = [];
    Object.keys(files).map((value) => {
    
        if (files[value].type === 'CODE') {
            const filePath = ensurePackiFilePrefix(value);
            jsonDocuments.push({
                path: filePath, 
                content: files[value].contents
             })
        }
    }
    )
    return jsonDocuments;
}

export async function createJsonFsAndFactory(files: packiTypes.PackiFiles, factoryPlugins?: any, metaPlugins?: any, globalContext?: { 
    [k: string]: any;
}):  Promise<JsonWizziFactory> {

    const plugins: string[] = [];
    const jsonDocuments: JsonDocumentDto[] = [];
    Object.keys(files).map((value) => {
    
        if (files[value].type === 'CODE' && files[value].contents && files[value].contents.length > 0) {
            const filePath = ensurePackiFilePrefix(value);
            jsonDocuments.push({
                path: filePath, 
                content: files[value].contents
             })
            const pluginList = wizziMaps.pluginsFor(filePath);
            pluginList.forEach((item) => {
            
                if (plugins.indexOf(item) < 0) {
                    plugins.push(item);
                }
            }
            )
        }
    }
    )
    return new Promise((resolve, reject) => 
        
            JsonComponents.createJsonFs(jsonDocuments, (err, jsonFs) => {
            
                if (err) {
                    return reject(err);
                }
                wizzi.jsonFactory({
                    jsonFs, 
                    plugins: factoryPlugins ? factoryPlugins : getWzCtxFactoryPlugins(), 
                    metaPlugins: metaPlugins ? metaPlugins : getWzCtxMetaPlugins(), 
                    globalContext: Object.assign({}, globalContext || {})
                 }, function(err: any, wf: wizzi.WizziFactory) {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve({
                        wf, 
                        jsonFs
                     })
                })
            }
            )
        );
}

export async function createJsonFs(files: packiTypes.PackiFiles):  Promise<JsonFs> {

    const jsonDocuments: JsonDocumentDto[] = [];
    Object.keys(files).map((value) => {
    
        if (files[value].type === 'CODE') {
            const filePath = ensurePackiFilePrefix(value);
            jsonDocuments.push({
                path: filePath, 
                content: files[value].contents
             })
        }
    }
    )
    return new Promise((resolve, reject) => 
        
            JsonComponents.createJsonFs(jsonDocuments, (err: any, result: JsonFs) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        );
}

export async function extractGeneratedFiles(jsonFs: JsonFs):  Promise<packiTypes.PackiFiles> {

    const files: packiTypes.PackiFiles = {};
    return new Promise((resolve, reject) => 
        
            jsonFs.toFiles({
                removeRoot: packiFilePrefix
             }, (err: any, result: fSystem.FileDef[]) => {
            
                if (err) {
                    reject(err);
                }
                result.forEach((value) => {
                
                    if (value.relPath.endsWith('.ittf') == false) {
                        files[value.relPath] = {
                            type: 'CODE', 
                            contents: value.content as string, 
                            generated: true
                         };
                    }
                }
                )
                resolve(files);
            }
            )
        );
}

export function ensurePackiFilePrefix(filePath: string) {

    var newFilePath = normalizePath(filePath);
    return newFilePath.startsWith(packiFilePrefix) ? newFilePath : packiFilePrefix + newFilePath;
}
function normalizePath(path) {

    return path.replace(/\\/g, '/');
}
