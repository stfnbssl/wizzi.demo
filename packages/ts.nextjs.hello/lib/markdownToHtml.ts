/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\lib\markdownToHtml.ts.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import {remark} from 'remark';
import html from 'remark-html';
export default async function markdownToHtml(markdown: string) {
    
        const result = await remark().use(html).process(markdown);
        return result.toString();
    }
