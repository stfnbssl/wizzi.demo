/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\middlewares\wizziViewEngine.ts.ittf
    utc time: Thu, 29 Jun 2023 08:52:23 GMT
*/
import path from 'path';
import {Application} from 'express';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
import {wizziProds} from '../features/wizzi';
export const WizziViewEngineMiddleware: MiddlewareType = (app: Application) => {

    app.engine('ittf', async function(filePath: string, options: any, callback: any) {
    
        try {
            const twinJsonContext = await wizziProds.inferAndLoadContextFs(filePath, 'wzCtx');
            var optionsLocals = Object.assign({}, options._locals, {
                user: {
                    avatar_url: config.userAvatarUrl, 
                    name: config.userDisplayName, 
                    username: config.userUserName
                 }
             });
            const context = {
                ...options, 
                locals: optionsLocals, 
                ...twinJsonContext, 
                isWizziStudio: true
             };
            const siteCtx = await wizziProds.loadSiteJsonModel('sitectx.json.ittf', context);
            context.siteCtx = siteCtx;
            console.log('WizziViewEngineMiddleware.filePath', filePath);
            console.log('WizziViewEngineMiddleware.options', Object.keys(options));
            wizziProds.generateArtifactFs(filePath, context).then((generated) => {
            
                return callback(null, generated.artifactContent);
            }
            ).catch((err) => {
            
                console.log("[31m%s[0m", 'WizziViewEngineMiddleware. wizziProds.generateArtifactFs error', err);
                return callback(err);
            }
            )
        } 
        catch (ex) {
            console.log("[31m%s[0m", 'WizziViewEngineMiddleware. Exception', ex);
            callback(ex);
        } 
    })
    const viewsFolder = path.resolve(__dirname, '..', 'site', 'views');
    // specify the views directory
    app.set('views', viewsFolder);
    // register the template engine
    app.set('view engine', 'ittf');
    console.log('WizziViewEngineMiddleware installed, on folder', viewsFolder);
}
;
