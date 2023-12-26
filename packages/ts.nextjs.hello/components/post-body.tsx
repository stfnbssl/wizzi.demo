/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\post-body.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import markdownStyles from './markdown-styles.module.css';
type Props = { 
    content: string;
};
const PostBody = ({
    content
 }: Props) => {

    return  (
        <div
         className="max-w-2xl mx-auto">
            <div
             className={markdownStyles['markdown']} dangerouslySetInnerHTML={{
                    __html: content
                 }} />
        </div>
        )
    ;
}
;
export default PostBody;
