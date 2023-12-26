/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.webpack\.wizzi\src\utils\sendResponse.ts.ittf
    utc time: Fri, 23 Jun 2023 15:12:42 GMT
*/
import {Response} from 'express';
import HttpException from '../httpException';
function sendContent(res: Response, contentType: string, content: string) {

    res.writeHead(200, {
        'Content-Type': contentType, 
        'Content-Length': content ? content.length : 0
     })
    res.end(content);
}
export const sendHtml = (res: Response, content: string) => 

    sendContent(res, 'text/html', content)
;
export const sendFailure = (res: Response, error: any, status: number) => {

    res.status(error && error.status ? error.status : status)
    res.type('application/json');
    res.send(error);
}
;
export const sendSuccess = (res: Response, message: any) => {

    res.status(200);
    res.type('application/json');
    res.send(message);
}
;
export function sendPromiseResult<T>(res: Response, message: Promise<T>) {

    message.then((result: T) => 
    
        // console.log('sendPromiseResult.ok', result);
        sendSuccess(res, result)
    ).catch((err: any) => {
    
        console.log("[31m%s[0m", 'sendPromiseResult.err', err);
        sendFailure(res, err, 500);
    }
    )
}
export function sendPromiseLikeResult<T>(res: Response, message: PromiseLike<T>) {

    message.then((result: T) => 
    
        sendSuccess(res, result)
    )
}
