/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\.wizzi\src\utils\rest.ts.ittf
*/
import {Request, Response} from 'express';
import {verify} from 'wizzi-utils';
import {sendFailure} from './sendResponse';
export const restParamsCheck = (request: Request) => {

    return new ParamsCheck(request);
}
;
class ParamsCheck {
    constructor(request: Request) {
        this.request = request;
        this.errors = [];
    }
    private request: Request;
    public errors: string[];
    notUndefined(qb: string, name: string) {
        var value = this.optional(qb, name);
        if (verify.isUndefined(value)) {
            this.error('Parameter: "' + name + '" must have a value.')
        }
        return value;
    }
    notEmpty(qb: string, name: string) {
        var value = this.optional(qb, name);
        if (verify.isEmpty(value)) {
            this.error('String parameter: "' + name + '" must have a value.')
        }
        return value;
    }
    notEmptyBody() {
        var value = this.optionalBody();
        if (verify.isEmpty(value)) {
            this.error('The body must be not empty.')
        }
        return value;
    }
    optional(qb: string, name: string) {
        var value;
        if (qb === 'query') {
            value = this.request.query[name];
        }
        else if (qb === 'params') {
            value = this.request.params[name];
        }
        else {
            value = this.request.body[name];
        }
        return value;
    }
    optionalBody() {
        return this.request.body;
    }
    error(message: string) {
        this.errors.push(message);
    }
    hasErrors() {
        return this.errors.length > 0;
    }
    sendErrors(response: Response) {
        sendFailure(response, {
            err: this.errors
         }, 501)
    }
}
