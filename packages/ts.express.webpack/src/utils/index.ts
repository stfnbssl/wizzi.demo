/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.webpack\.wizzi\src\utils\index.ts.ittf
    utc time: Fri, 23 Jun 2023 15:12:42 GMT
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
