/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\interfaces\post.ts.ittf
    utc time: Wed, 14 Jun 2023 04:39:25 GMT
*/
import type Author from './author';
type PostType = { 
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: { 
        url: string;
    };
    content: string;
};
export default PostType;
