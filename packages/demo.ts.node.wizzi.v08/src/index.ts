/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\demo.ts.node.wizzi.v08\.wizzi\src\index.ts.ittf
    utc time: Mon, 10 Apr 2023 12:25:06 GMT
*/
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
let cmd = args._[0];
console.log('args', args, 'cmd', cmd);
if (cmd == 'hello') {
    console.log("Hello");
}
else {
    throw new Error("Command " + cmd + " unknown.");
}
