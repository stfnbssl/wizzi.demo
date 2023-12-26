/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\data\packages\demo.express.hello\.wizzi\src\middlewares\errors.ts.ittf
*/
import {Application, Request, Response} from 'express';
import {MiddlewareType} from '../features/app/types';
import HttpException from '../httpException';
export const ErrorsMiddleware: MiddlewareType = (app: Application) => {

    app.use(// catch 404 and forward to error handler
    function(request: Request, res: Response, next: Function) {
    
        var err = new HttpException(404, 'Not Found');
        next(err);
    })
    
    // development error handler
    
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err: HttpException, request: Request, res: Response, next: Function) {
        
            res.status(err.status || 500);
            res.render('error.html.ittf', {
                message: err.message, 
                error: err
             })
        })
    }
    // production error handler
    // no stacktraces leaked to user
    else {
        app.use(function(err: HttpException, request: Request, res: Response, next: Function) {
        
            res.status(err.status || 500);
            res.render('error.html.ittf', {
                message: err.message, 
                error: err
             })
        })
    }
    console.log("[32m%s[0m", 'ErrorsMiddleware installed');
}
;
