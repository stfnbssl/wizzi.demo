/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\features\wizziGist\types.ts.ittf
    utc time: Thu, 29 Jun 2023 08:52:23 GMT
*/
export type GistKind = "gist" | "fragment" | "context" | "snippet";
export type GistOptions = { 
    name?: string;
    newname?: string;
    schema?: string;
    type?: string;
    kind?: GistKind;
    hash?: string;
    content?: string;
};