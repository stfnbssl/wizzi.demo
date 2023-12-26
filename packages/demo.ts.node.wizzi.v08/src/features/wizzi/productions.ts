/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\demo.ts.node.wizzi.v08\.wizzi\src\features\wizzi\productions.ts.ittf
    utc time: Mon, 10 Apr 2023 12:25:06 GMT
*/
import path from 'path';
import fs from 'fs';
import stringify from 'json-stringify-safe';
import wizzi from '@wizzi/factory';
import {fSystem, ittfScanner, ittfGraph, verify} from '@wizzi/utils';
import {packiTypes} from '../packi';
import {config} from '../config';
import * as wizziMaps from './maps';
import {createFilesystemFactory, createFilesystemFactoryWithParameters} from './factory';
import {GenerationOptions, GeneratedArtifact, WizziModelTypesRequest, WizziJobTypesRequest, TransformationOptions, TransformedModel} from './types';
import {JsonFs} from '@wizzi/repo';
const myname = 'features/wizzi/productions';

export async function loadModelFs(filePath: string, context: any):  Promise<wizzi.WizziModel> {

    return new Promise(
        // TODO catch error
        async (resolve, reject) => {
        
            const schemaName = wizziMaps.schemaFromFilePath(filePath);
            if (!schemaName) {
                return reject('File is not a known ittf document: ' + filePath);
            }
            const wf = await createFilesystemFactory();
            wf.loadModel(schemaName, filePath, {
                mTreeBuildupContext: context
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        }
        );
}

async function loadModelInternal(wf: wizzi.WizziFactory, filePath: string, context: any):  Promise<wizzi.WizziModel> {

    return new Promise(async (resolve, reject) => {
        
            const schemaName = wizziMaps.schemaFromFilePath(filePath);
            if (!schemaName) {
                return reject('File is not a known ittf document: ' + filePath);
            }
            wf.loadModel(schemaName, filePath, {
                mTreeBuildupContext: context
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        }
        );
}

export async function mTreeBuildupScriptFs(filePath: string, context: any):  Promise<any> {

    throw new Error(myname + '.mTreeBuildupScriptFs not yet implemented');
}

export async function mTreeBuildupScriptDb(owner: string, name: string, context?: any):  Promise<GeneratedArtifact> {

    throw new Error(myname + '.mTreeBuildupScriptDB not yet implemented');
}

export async function mTreeFs(ittfDocumentUri: string, context: any):  Promise<any> {

    context = context || {};
    return new Promise(async (resolve, reject) => {
        
            const wf = await createFilesystemFactory();
            wf.loadMTree(ittfDocumentUri, context, (err: any, mTree: any) => {
            
                if (err) {
                    return reject(err);
                }
                resolve({
                    mTree: mTree, 
                    mTreeIttf: mTree.toIttf()
                 })
            }
            )
        }
        );
}

export async function mTreeDb(owner: string, name: string, context?: any):  Promise<GeneratedArtifact> {

    throw new Error(myname + '.mTreeDb not yet implemented');
}


export async function generateArtifactFs(filePath: string, context?: any, options?: GenerationOptions):  Promise<GeneratedArtifact> {

    const _options: GenerationOptions = options || {};
    return new Promise(async (resolve, reject) => {
        
            const generator = _options.generator ? _options.generator : wizziMaps.generatorFor(filePath);
            
            // TODO catch error
            if (generator) {
                const wf = await createFilesystemFactory();
                try {
                    wf.loadModelAndGenerateArtifact(filePath, {
                        modelRequestContext: context || {}, 
                        artifactRequestContext: context || {}
                     }, generator, (err, result) => {
                    
                        if (err) {
                            return reject(err);
                        }
                        resolve({
                            artifactContent: result, 
                            sourcePath: filePath, 
                            artifactGenerator: generator
                         })
                    }
                    )
                } 
                catch (ex) {
                    return reject(ex);
                } 
            }
            else {
                reject('No artifact generator available for document ' + filePath);
            }
        }
        );
}

export async function generateArtifactDb(owner: string, name: string, context?: any):  Promise<GeneratedArtifact> {

    throw new Error(myname + '.generateArtifactDb not yet implemented');
}

export async function generateFolderArtifactsFs(sourceFolderUri: string, destFolderUri: string, context?: any):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            try {
                const wf = await createFilesystemFactory();
                wf.generateFolderArtifacts(sourceFolderUri, {
                    modelRequestContext: context, 
                    artifactRequestContext: context
                 }, {
                    destFolder: destFolderUri
                 }, (err: any, result: string) => {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve("Generated folder artifacts")
                }
                )
            } 
            catch (ex) {
                return reject(ex);
            } 
        }
        );
}

export async function generateWizziModelTypes(request: WizziModelTypesRequest) {

    return new Promise(async (resolve, reject) => {
        
            const storeKind = request.storeKind || 'filesystem';
            const mTreeBuildupContext = Object.assign({}, request.mTreeBuildupContext);
            const globalContext = Object.assign({}, request.globalContext);
            
            var plugins = [];
            if (request.plugins) {
                var i, i_items=request.plugins, i_len=request.plugins.length, item;
                for (i=0; i<i_len; i++) {
                    item = request.plugins[i];
                    if (plugins.indexOf(item) < 0) {
                        plugins.push(item);
                    }
                }
            }
            else {
                plugins.push('wizzi-core');
            }
            console.log('wizziProds.generateWizziModelTypes.plugins', plugins);
            for (var k in mTreeBuildupContext) {
                console.log('- mTreeBuildupContext property', k, mTreeBuildupContext[k]);
            }
            for (var k in globalContext) {
                console.log('- globalContext property', k, globalContext[k]);
            }
            
            try {
                const wf = await createFilesystemFactoryWithParameters(request.pluginsBaseFolder, plugins, globalContext);
                console.log('STARTING WIZZI MODEL TYPES GENERATION FOR SCHEMA ' + request.wfschemaName);
                wf.generateModelDoms(request.wfschemaIttfDocumentUri, request.wfschemaOutputPackageFolder, request.wfschemaName, mTreeBuildupContext, (err: any, result: any) => {
                
                    if (err) {
                        return reject({
                                message: "wizziProds.generateWizziModelTypes.generateModelDoms.error", 
                                err: {
                                    
                                 }
                             });
                    }
                    console.log("[32m%s[0m", 'WIZZI MODEL TYPES GENERATED FOR SCHEMA ' + request.wfschemaName);
                    return resolve(request.wfschemaName);
                }
                )
            } 
            catch (ex) {
                console.log("[31m%s[0m", "wizziProds.generateWizziModelTypes.error", ex);
                return reject({
                        message: "wizziProds.generateWizziModelTypes.error", 
                        err: ex
                     });
            } 
        }
        );
}

export async function transformModelFs(filePath: string, context?: any, options?: TransformationOptions):  Promise<TransformedModel> {

    return new Promise(async (resolve, reject) => {
        
            const transformer = options && options.transformer ? options.transformer : wizziMaps.transformerFor(filePath);
            
            // TODO catch error
            if (transformer) {
                const wf = await createFilesystemFactory();
                const transformationContext = {
                    modelRequestContext: context || {}
                 };
                wf.loadAndTransformModel(filePath, {
                    modelRequestContext: transformationContext
                 }, transformer, (err: any, result: any) => {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve({
                        transformResult: result, 
                        sourcePath: filePath, 
                        modelTransformer: transformer
                     })
                }
                )
            }
            else {
                reject('No model transformer available for document ' + filePath);
            }
        }
        );
}

export async function executeJobFs(request: WizziJobTypesRequest):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
            try {
                const globalContext = Object.assign({}, request.globalContext);
                
                var plugins = [];
                if (request.plugins) {
                    var i, i_items=request.plugins, i_len=request.plugins.length, item;
                    for (i=0; i<i_len; i++) {
                        item = request.plugins[i];
                        if (plugins.indexOf(item) < 0) {
                            plugins.push(item);
                        }
                    }
                }
                else {
                    plugins.push('wizzi-core');
                }
                const wf = await createFilesystemFactoryWithParameters(request.pluginsBaseFolder, plugins, globalContext);
                console.log('STARTING WIZZI JOB', request.wfjobIttfDocumentUri);
                wf.executeJob({
                    name: request.wfjobName || path.basename(request.wfjobIttfDocumentUri), 
                    path: request.wfjobIttfDocumentUri, 
                    productionOptions: {
                        
                     }, 
                    globalContext: globalContext
                 }, (err: any, result: any) => {
                
                    if (err) {
                        return reject({
                                message: "wizziProds.executeJobFs.wf.executeJob.error", 
                                err: {
                                    
                                 }
                             });
                    }
                    console.log("[32m%s[0m", 'WIZZI JOB Executed', request.wfjobIttfDocumentUri);
                    return resolve(result);
                }
                )
            } 
            catch (ex) {
                console.log("[31m%s[0m", "wizziProds.executeJobFs.error", ex);
                return reject({
                        message: "wizziProds.executeJobFs.error", 
                        err: ex
                     });
            } 
        }
        );
}

export async function inferAndLoadContextFs(filePath: string, exportName: string):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            const pf = wizziMaps.parseFilePath(filePath);
            if (pf.isIttfDocument && pf.schema !== 'json') {
                var twinJsonPath = path.join(path.dirname(filePath), pf.seedname + '.json.ittf');
                if (fs.existsSync(twinJsonPath)) {
                    loadModelFs(twinJsonPath, {}).then(model => 
                    
                        resolve({
                            [exportName]: model
                         })
                    ).catch(err => 
                    
                        reject(err)
                    )
                }
                else {
                    resolve({})
                }
            }
            else {
                resolve({})
            }
        }
        );
}

export async function scanIttfDocumentFs(filePath: string, rootFolder: string):  Promise<ittfGraph.IttfDocumentGraph> {

    return new Promise((resolve, reject) => 
        
            ittfScanner.scanIttfDocument(filePath, {
                rootFolder
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        );
}

export async function scanIttfFolder(filePath: string, rootFolder: string):  Promise<ittfScanner.FolderBrowseResult> {

    return new Promise((resolve, reject) => 
        
            ittfScanner.browseFolder(filePath, {
                rootFolder
             }, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        );
}

export async function scanIttfDocumentDb(owner: string, name: string, rootFolder: string):  Promise<ittfGraph.IttfDocumentGraph> {

    throw new Error(myname + '.scanIttfDocumentDb not yet implemented');
}

export async function folderBrowseToPackiFiles(folderBrowse: ittfScanner.FolderBrowseResult):  Promise<packiTypes.PackiFiles> {

    return new Promise((resolve, reject) => {
        
            const packiFiles: packiTypes.PackiFiles = {};
            folderBrowse.fsitems.map((fsitem) => {
            
                if (fsitem.isFolder == false) {
                    packiFiles[fsitem.uri] = {
                        type: "CODE", 
                        contents: fsitem.content
                     };
                }
            }
            )
            resolve(packiFiles);
        }
        );
}

export async function folderFsToPackiFiles(folderPath: string):  Promise<packiTypes.PackiFiles> {

    return new Promise((resolve, reject) => {
        
            const fsfile = fSystem.vfile();
            const packiFiles: packiTypes.PackiFiles = {};
            try {
                fsfile.getFiles(folderPath, {
                    deep: true, 
                    documentContent: true
                 }, (err: any, result: fSystem.FileDef[]) => {
                
                    if (err) {
                        console.log("[31m%s[0m", "wizzi.productions.folderFsToPackiFiles", err);
                        return reject({
                                message: "wizzi.productions.folderFsToPackiFiles", 
                                err
                             });
                    }
                    result.map(fsitem => 
                    
                        packiFiles[fsitem.relPath] = {
                            type: "CODE", 
                            contents: fsitem.content || ""
                         }
                    )
                    return resolve(packiFiles);
                }
                )
            } 
            catch (ex) {
                return reject({
                        message: "wizzi.productions.folderFsToPackiFiles", 
                        err: ex
                     });
            } 
        }
        );
}

export async function packiFilesToFolderFs(folderPath: string, files: packiTypes.PackiFiles):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            try {
                const fsfile = fSystem.vfile();
                fsfile.deleteFolder(folderPath, (err: any, result: any) => {
                
                    if (err) {
                        console.log("[31m%s[0m", "wizzi.productions.packiFilesTofolderFs.fsfile.deleteFolder", err);
                        return reject({
                                message: "wizzi.productions.packiFilesTofolderFs.fsfile.deleteFolder", 
                                err
                             });
                    }
                    for (var k in files) {
                        var contents = files[k].contents;
                        fsfile.write(path.join(folderPath, k), contents)
                    }
                    return resolve({
                            message: "Folder replaced"
                         });
                }
                )
            } 
            catch (ex) {
                console.log("[31m%s[0m", "Exception. wizzi.productions.packiFilesTofolderFs");
                return reject({
                        message: "Exception. wizzi.productions.packiFilesTofolderFs", 
                        err: ex
                     });
            } 
        }
        );
}
export async function wizzifyV08Fs(filePath: string):  Promise<string> {

    return new Promise(async (resolve, reject) => {
        
            var extension = path.extname(filePath);
            var schema = wizziMaps.schemaFromExtension(extension);
            const wf = await createFilesystemFactory();
            wf.getWizziIttf(filePath, schema, (err, ittfDocument) => {
            
                if (err) {
                    reject(err)
                }
                return resolve(ittfDocument);
            }
            )
        }
        );
}
export async function getCodeASTV08Fs(filePath: string):  Promise<any> {

    return new Promise(async (resolve, reject) => {
        
            var extension = path.extname(filePath);
            var schema = wizziMaps.schemaFromExtension(extension);
            const wf = await createFilesystemFactory();
            wf.getCodeAST(filePath, schema, (err, ittfDocument) => {
            
                if (err) {
                    reject(err)
                }
                return resolve(ittfDocument);
            }
            )
        }
        );
}
