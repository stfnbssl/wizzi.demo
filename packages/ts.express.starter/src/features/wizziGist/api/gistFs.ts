/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\features\wizziGist\api\gistFs.ts.ittf
    utc time: Thu, 29 Jun 2023 08:52:23 GMT
*/
import path from 'path';
import {verify, fSystem} from 'wizzi-utils';
import {config} from '../../config';
import {GistKind} from '../types';
import * as wizziFs from '../../../utils/wizziFs';

var GIST_KINDS = ['gist', 'fragment', 'context'];

function isGistKind(kind) {

    return GIST_KINDS.indexOf(kind) > -1;
}

function normalize(filepath) {

    return verify.replaceAll(filepath, '\\', '/');
}

const gistFolderNameFromKind = function(kind: GistKind) {

    if (kind === 'gist') {
        return 'gists';
    }
    else if (kind === 'fragment') {
        return 'gists';
    }
    else if (kind === 'context') {
        return 'contexts';
    }
    else {
        return 'snippets';
    }
};
const gistKindFromFolderPath = function(folderParts: string[]):  GistKind {

    console.log('gistKindFromFolderPath.folderParts', folderParts, __filename);
    if (folderParts.length == 3) {
        return 'fragment';
    }
    else {
        if (folderParts[0] === 'gists') {
            return 'gist';
        }
        else if (folderParts[0] === 'contexts') {
            return 'context';
        }
        else {
            return 'snippet';
        }
    }
};
const gistKindFromFilePath = function(filePath: string):  GistKind {

    var dirname = path.dirname(filePath);
    var relFolder = normalize(dirname.substr(config.jobsBasePath.length + 1));
    console.log('gistKindFromFilePath.relFolder', relFolder, __filename);
    return gistKindFromFolderPath(relFolder.split('/'));
};
const gistsFolderPath = function(kind: GistKind) {

    return path.join(config.jobsBasePath, gistFolderNameFromKind(kind));
};
const gistExecutablesFolderPath = function(kind: GistKind) {

    return path.join(config.jobsBasePath, gistFolderNameFromKind(kind) + '_executables');
};
const gistFilePath = function(kind: GistKind, name) {

    return path.join(gistsFolderPath(kind), name);
};
const gistExecutableFilePath = function(kind: GistKind, name) {

    return path.join(gistExecutablesFolderPath(kind), name);
};
const gistInfoByPath = function(filePath) {

    return wizziFs.fileInfoByPath(filePath, gistsFolderPath("gist"));
};
async function getGistFiles(kind: GistKind) {

    if (kind === 'snippet') {
        return new Promise((resolve, reject) => 
            
                wizziFs.getFolderFiles(gistsFolderPath(kind), gistsFolderPath(kind), '/wizzi/' + kind + 's').then((snippets: any) => {
                
                    return resolve({
                            data: {
                                snippets: snippets
                             }
                         });
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'gistFs.getGistFiles.getFolderFiles.snippets.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    else {
        return new Promise((resolve, reject) => {
            
                var that = this;
                wizziFs.getFolderFiles(gistsFolderPath('gist'), gistsFolderPath('gist'), '/wizzi/gists').then((gists: any) => 
                
                    wizziFs.getFolderFiles(gistsFolderPath('fragment'), gistsFolderPath('fragment'), '/wizzi/fragments').then((fragments: any) => 
                    
                        wizziFs.getFolderFiles(gistsFolderPath('context'), gistsFolderPath('context'), '/wizzi/contexts').then((contexts: any) => {
                        
                            return resolve({
                                    data: {
                                        gists: gists.data.items, 
                                        fragments: fragments.data.items, 
                                        contexts: contexts.data.items
                                     }
                                 });
                        }
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'gistFs.getGistFiles.getFolderFiles.context.error', err);
                            return reject(err);
                        }
                        )
                    
                    ).catch((err: any) => {
                    
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'gistFs.getGistFiles.getFolderFiles.fragments.error', err);
                        return reject(err);
                    }
                    )
                
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'gistFs.getGistFiles.getFolderFiles.gists.error', err);
                    return reject(err);
                }
                )
            }
            );
    }
}
async function gistFileExists(kind: GistKind, name: string) {

    return wizziFs.fsItemExists(gistFilePath(kind, name));
}
async function getGistFile(kind: GistKind, name: string) {

    return wizziFs.readFsItem(gistFilePath(kind, name));
}
async function putGistFile(kind: GistKind, name: string, content: string) {

    return new Promise((resolve, reject) => {
        
            var filePath = gistFilePath(kind, name);
            wizziFs.writeFsItem(filePath, content).then(() => {
            
                var gist = gistInfoByPath(filePath);
                gist.content = content;
                return resolve({
                        data: {
                            gist: gist
                         }
                     });
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'gistFs.putGistFile.wizziFs.writeFsItem.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function putGistExecutable(kind: GistKind, filePath: string, content: string) {

    return new Promise((resolve, reject) => {
        
            var name = path.basename(filePath);
            var executablePath = gistExecutableFilePath(kind, name);
            wizziFs.writeFsItem(executablePath, content).then((notUsed: any) => {
            
                return resolve({
                        executablePath: executablePath
                     });
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'gistFs.putGistExecutable.wizziFs.writeFsItem.error', err);
                return reject(err);
            }
            )
        }
        );
}

export {gistKindFromFilePath, gistInfoByPath, getGistFiles, gistFileExists, getGistFile, putGistFile, putGistExecutable};
