/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-demo\.wizzi\examples\starter\essentials\languageschemas\js\level_0\index.js.ittf
*/
'use strict';
var async = require('async');
var samples = [
    require('./step_3_go')
];
function execute(callback) {
    async.series(samples, function(err, notUsed) {
        if (err) {
            var fullErr = JSON.stringify(err, null, 2);
            console.log('Error fullErr', fullErr);
            throw new Error(JSON.stringify(err, null, 2));
        }
        var msg = 'js.languageschemas - Level 0 samples - done.';
        console.log(msg);
        if (callback) {
            return callback(null, msg);
        }
    })
}
module.exports = execute;
if (typeof require != 'undefined' && require.main==module) {
    execute();
}