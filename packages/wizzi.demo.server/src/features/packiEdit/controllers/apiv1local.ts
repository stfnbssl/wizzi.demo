/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\.wizzi\src\features\packiEdit\controllers\apiv1local.ts.ittf
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {config} from '../../config';
import {wizziTypes, wizziProds} from '../../wizzi';
import {packiTypes} from '../../packi';

const myname = 'features/packi-edit/controllers/apiv1local';

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

export class ApiV1LocalController implements ControllerType {
    
    public path = '/api/v1/local';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1LocalController.initialize');
        this.router.put('/folder/fs/:folderpath', this.putFolderFs);
    };
    
    private putFolderFs = async (request: Request, response: Response) => {
    
        console.log(myname, "putFolderFs", 'folderpath', request.params.folderpath, 'packiFiles', request.body.packiFiles, __filename);
        if (!request.body.packiFiles) {
            return sendFailure(response, {
                    err: "Missing packiFiles property in body"
                 }, 501);
        }
        wizziProds.packiFilesToFolderFs(request.params.folderpath, request.body.packiFiles).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log('packiEdit.ApiV1LocalController.putFolderFs.wizziProds.packiFilesToFolder.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
