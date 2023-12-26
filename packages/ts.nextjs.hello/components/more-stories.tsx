/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\more-stories.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import PostPreview from './post-preview';
import type Post from '../interfaces/post';
type Props = { 
    posts: Post[];
};
const MoreStories = ({
    posts
 }: Props) => {

    return  (
        <section
        >
            <h2
             className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                More Stories
            </h2>
            <div
             className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {
                    posts.map((post) => 
                    
                         (
                        <PostPreview 
                            key={post.slug}
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                            slug={post.slug}
                            excerpt={post.excerpt}
                         />
                        )
                    
                    )
                }
            </div>
        </section>
        )
    ;
}
;
export default MoreStories;
