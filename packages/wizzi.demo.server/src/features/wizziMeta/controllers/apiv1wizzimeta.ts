/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\.wizzi\src\features\wizziMeta\controllers\apiv1wizzimeta.ts.ittf
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {createWizziPackage} from '../api/wizziMeta';

const myname = 'features/wizzimeta/controllers/wizzimeta';

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

export class ApiV1WizziMetaController implements ControllerType {
    
    public path = '/api/v1/meta';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ApiV1WizziMetaController.initialize');
        this.router.post('/create', this.createPackage);
    };
    
    private createPackage = async (request: Request, response: Response) => {
    
        console.log('getIttfDocument.request.params', request.params, __filename);
        var __check = restParamsCheck(request);
        var hash = __check.notEmpty('query', 'hash');
        if (__check.hasErrors) {
            return __check.sendErrors(response);
        }
        createWizziPackage(hash).then((result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            if (typeof err === 'object' && err !== null) {
            }
            console.log("[31m%s[0m", 'ApiV1WizziMeta.createPackage.createWizziPackage.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
