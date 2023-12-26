/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\post-title.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import {ReactNode} from 'react';
type Props = { 
    children?: ReactNode;
};
const PostTitle = ({
    children
 }: Props) => {

    return  (
        <h1
         className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            {children}
        </h1>
        )
    ;
}
;
export default PostTitle;
