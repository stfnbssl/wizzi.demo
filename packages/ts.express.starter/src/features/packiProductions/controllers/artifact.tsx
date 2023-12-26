/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\features\packiProductions\controllers\artifact.tsx.ittf
    utc time: Thu, 29 Jun 2023 08:52:25 GMT
*/
import express from 'express';
import {Router, Request, Response, NextFunction} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {restParamsCheck} from '../../../utils/rest';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {getTemplatePackiFiles} from '../api/meta';
import {createArtifactProduction, updateArtifactProduction, deleteArtifactProduction, getArtifactProductionObject, getArtifactProductionObjectById} from '../api/artifact';
import {mergePackiFiles} from '../utils';
import {packiTypes} from '../../packi';

const myname = 'features/production/controllers/artifact';

function renderPageForm(req: Request, res: Response, data: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <PageFormDocument
     data={data} queryParams={queryParams} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}
function getPackiConfigFile():  packiTypes.PackiFiles {

    return {
            ['.packi/config.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    { meta', 
                    '        $$ name "..name.."', 
                    '        { metaCtx"', 
                    '            kind "artifact" $$ file|artifact', 
                    '            $$ filePath ".packi/metaCtx.json.ittf" $$ when kind = "file"', 
                    '            { artifact', 
                    '                $$ name "..name.." $$ when kind = "artifact"', 
                    '            [ contexts', 
                    '                {', 
                    '                    $$ propertyName "..name.."', 
                    '                    $$ artifactName "..name.."', 
                    '    [ tfolders', 
                    '        {', 
                    '            $$ name "..name.."', 
                    '    [ contexts', 
                    '        {', 
                    '            $$ propertyName "..name.."', 
                    '            $$ artifactName "..name.."'
                ].join('\n')
             }
         };
}

function makeHandlerAwareOfAsyncErrors(handler: any) {

    return async function(request: Request, response: Response, next: NextFunction) {
        
            try {
                await handler(request, response, next);
            } 
            catch (error: any) {
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

export class ArtifactProductionController implements ControllerType {
    
    public path = '/artifact';
    
    public router = Router();
    
    
    initialize = (app: express.Application, initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering ArtifactProductionController.initialize');
        this.router.get("/new", makeHandlerAwareOfAsyncErrors(this.getNewArtifactForm))
        this.router.post("/new", makeHandlerAwareOfAsyncErrors(this.postArtifact))
        this.router.get("/update/:id", makeHandlerAwareOfAsyncErrors(this.getUpdateArtifactForm))
        this.router.post("/update", makeHandlerAwareOfAsyncErrors(this.putArtifact))
        this.router.get("/delete/:id", makeHandlerAwareOfAsyncErrors(this.getDeleteArtifactForm))
        this.router.post("/delete", makeHandlerAwareOfAsyncErrors(this.deleteArtifact))
    };
    
    private getNewArtifactForm = async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreateArtifactProduction', 
            formData: {
                owner: (request.session as any).user.username, 
                name: request.query.name, 
                mainIttf: request.query.mainIttf, 
                schema: request.query.schema
             }
         }, {})
    
    ;
    
    private postArtifact = 
    // loog myname + '.postNewArtifact.request.body', JSON.stringify(request.body, null, 2)
    async (request: Request, response: Response) => {
    
        const wizziSchema = request.body.ap_wizzi_schema || 'html';
        const mainIttf = request.body.ap_main_ittf || 'index.' + wizziSchema + '.ittf';
        const contexts = request.body.ap_contexts || '[]';
        const tfolders = request.body.ap_tfolders || '[]';
        getTemplatePackiFiles(request.body.meta_id, request.body.meta_propsValues ? JSON.parse(request.body.meta_propsValues) : {}, request.query.context as string, request.body.context ? JSON.parse(request.body.context) : {}, {
            wizziSchema: wizziSchema, 
            mainIttf: mainIttf
         }).then((packiFiles: packiTypes.PackiFiles) => 
        
            createArtifactProduction((request.session as any).user.username, request.body.ap_name, request.body.ap_description, mainIttf, wizziSchema, JSON.stringify(mergePackiFiles(packiFiles, getPackiConfigFile()))).then((result: CRUDResult) => {
            
                
                // _ response.redirect('/packi/productions/artifacts')
                if (result.ok) {
                    response.redirect('/~~/a/' + (request.session as any).user.username + '/' + request.body.ap_name)
                }
                else {
                    response.render('error.html.ittf', {
                        message: 'creating a new artifact production', 
                        error: result
                     })
                }
            }
            ).catch((err: any) => 
            
                response.render('error.html.ittf', {
                    message: 'creating a new artifact production', 
                    error: err
                 })
            )
        
        )
    }
    ;
    
    private getUpdateArtifactForm = 
    // loog myname + '.getUpdateArtifactForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getArtifactProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdateArtifactProduction', 
                formData: {
                    _id: id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    mainIttf: result.mainIttf, 
                    wizziSchema: result.wizziSchema
                 }
             }, {})
        )
    }
    ;
    
    private putArtifact = async (request: Request, response: Response) => {
    
        const obj = request.body;
        updateArtifactProduction(obj.ap_id, obj.ap_owner, obj.ap_name, obj.ap_description, obj.ap_mainIttf, obj.ap_wizziSchema).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/packi/productions/artifacts');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'updating a artifact production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getDeleteArtifactForm = 
    // loog myname + '.getDeleteArtifactForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getArtifactProductionObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeleteArtifactProduction', 
                formData: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    mainIttf: result.mainIttf, 
                    wizziSchema: result.wizziSchema
                 }
             }, {})
        )
    }
    ;
    
    private deleteArtifact = 
    // loog myname + '.deleteArtifact.request.path', request.path
    async (request: Request, response: Response) => {
    
        const obj = request.body;
        deleteArtifactProduction(obj.ap_id, obj.ap_owner, obj.ap_name, obj.ap_description, obj.ap_mainIttf, obj.ap_wizziSchema).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/packi/productions/artifacts');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'deleting a artifact production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
}
