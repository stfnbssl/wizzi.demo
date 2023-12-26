/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\cover-image.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
type Props = { 
    title: string;
    src: string;
    slug?: string;
};
const CoverImage = ({
    title, 
    src, 
    slug
 }: Props) => {

    const image =  (
    <Image 
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn('shadow-sm w-full', {
                'hover:shadow-lg transition-shadow duration-200': slug
             })}
        width={1300}
        height={630}
     />
    )
    ;
    return  (
        <div
         className="sm:mx-0">
            {
                slug ?  (
                    <Link
                     as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
                        {image}
                    </Link>
                    )
                 : image
            }
        </div>
        )
    ;
}
;
export default CoverImage;
