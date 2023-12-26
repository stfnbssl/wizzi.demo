/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\post-header.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../interfaces/author';
type Props = { 
    title: string;
    coverImage: string;
    date: string;
    author: Author;
};
const PostHeader = ({
    title, 
    coverImage, 
    date, 
    author
 }: Props) => {

    return  (
        <
        >
            <PostTitle
            >
                {title}
            </PostTitle>
            <div
             className="hidden md:block md:mb-12">
                <Avatar
                 name={author.name} picture={author.picture} />
            </div>
            <div
             className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage
                 title={title} src={coverImage} />
            </div>
            <div
             className="max-w-2xl mx-auto">
                <div
                 className="block md:hidden mb-6">
                    <Avatar
                     name={author.name} picture={author.picture} />
                </div>
                <div
                 className="mb-6 text-lg">
                    <DateFormatter
                     dateString={date} />
                </div>
            </div>
        </>
        )
    ;
}
;
export default PostHeader;
