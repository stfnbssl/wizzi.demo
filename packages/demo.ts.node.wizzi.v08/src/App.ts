/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\demo.ts.node.wizzi.v08\.wizzi\src\App.ts.ittf
    utc time: Mon, 10 Apr 2023 12:25:06 GMT
*/
import {ConfigType, config} from './features/config/index';
import {ModelBuilderType} from './features/app';

async function startServices(config: ConfigType) {

    return {};
}

async function start() {

    const services = await startServices(config);
    return {
            services
         };
}

export default {
        start
     }
