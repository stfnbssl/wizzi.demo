/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\.wizzi\src\features\packiEdit\controllers\localedit.tsx.ittf
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import path from 'path';
import fs from 'fs';
import parseUrl from 'parseurl';
import ReactDOMServer from 'react-dom/server';
import {config} from '../../config';
import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {packiTypes} from '../../packi';
import EditorDocument from '../../../pages/EditorDocument';
import {getPackiFromLocalFolder} from '../api/packiEdit';

const myname = 'features/packi-edit/controllers/localedit';
function renderPackiEditor(req: Request, res: Response, packiItemObject: object, loggedUser: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + ((ReactDOMServer.renderToStaticMarkup(
    <EditorDocument
     data={packiItemObject} queryParams={queryParams} loggedUser={loggedUser} />
    )));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}

function makeHandlerAwareOfAsyncErrors(handler) {

    return async function(request: Request, response: Response, next: NextFunction) {
        
            try {
                await handler(request, response, next);
            } 
            catch (error) {
                if (error instanceof FcError) {
                    response.status(statusCode.BAD_REQUEST).send({
                        code: error.code, 
                        message: error.message, 
                        data: error.data || {}
                     })
                }
                else {
                    const fcError = new FcError(SYSTEM_ERROR);
                    response.status(statusCode.BAD_REQUEST).send({
                        code: fcError.code, 
                        message: error.message, 
                        data: fcError.data || {}
                     })
                }
            } 
        };
}

export class LocalEditController implements ControllerType {
    
    public path = '/~local~';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering LocalEditController.initialize');
        this.router.get('/*', this.getFolderEditor);
    };
    
    private getFolderEditor = async (request: Request, response: Response) => {
    
        const parsedUrl = parseUrl(request);
        const pathName = decodeURIComponent(parsedUrl.pathname);
        const parts = pathName.split('/');
        const folderPath = path.join(config.ittfPath, parts.slice(2).join('/'));
        console.log(myname, 'getFolderEditor', 'pathName', pathName, 'folderPath', 'folderPath', __filename);
        const queryParams = {};
        wizziProds.folderFsToPackiFiles(folderPath).then((packiFiles: packiTypes.PackiFiles) => {
        
            const loggedUser = {
                id: 0, 
                username: config.userUserName, 
                displayName: config.userDisplayName, 
                picture: config.userAvatarUrl
             };
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: {
                    _id: 0, 
                    owner: config.userUserName, 
                    name: request.path, 
                    description: "Local folder", 
                    mainIttf: "", 
                    wizziSchema: "", 
                    packiFiles: packiFiles, 
                    packiProduction: 'artifact', 
                    isLocalFolder: true, 
                    localFolderPath: folderPath, 
                    localFolderUri: request.path
                 }
             }, loggedUser, queryParams)
        }
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log('packiEdit.LocalEditController.getFolderEditor.getPackiFromLocalFolder.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}