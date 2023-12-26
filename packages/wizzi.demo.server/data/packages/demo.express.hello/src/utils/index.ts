/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\data\packages\demo.express.hello\.wizzi\src\utils\index.ts.ittf
*/
// A helper function to assert the request ID param is valid
// and convert it to a number (since it comes as a string by default)
function getIdParam(req) {

    const id = req.params.id;
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':id' param: "${id}"`);
}
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const statusCode = {
    SUCCESS: 200, 
    BAD_REQUEST: 400, 
    FORBIDDEN: 403, 
    NOT_FOUND: 404
 };

// ms
const expiredAfter = "600000";
export {
    getIdParam, 
    statusCode, 
    expiredAfter, 
    emailRegex
 }
