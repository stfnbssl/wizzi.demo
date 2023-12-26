/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\pages\index.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import {getAllPosts} from '../lib/api';
import Head from 'next/head';
import {CMS_NAME} from '../lib/constants';
import Post from '../interfaces/post';
type Props = { 
    allPosts: Post[];
};
export default function Index({
        allPosts
     }: Props) {
    
        const heroPost = allPosts[0];
        const morePosts = allPosts.slice(1);
        return  (
            <
            >
                <Layout
                >
                    <Head
                    >
                        <title
                        >
                            {
                                `Next.js Blog Example with ${CMS_NAME}`
                            }
                        </title>
                    </Head>
                    <Container
                    >
                        <Intro
                         />
                        {
                            heroPost
                             &&  (
                                <HeroPost 
                                    title={heroPost.title}
                                    coverImage={heroPost.coverImage}
                                    date={heroPost.date}
                                    author={heroPost.author}
                                    slug={heroPost.slug}
                                    excerpt={heroPost.excerpt}
                                 />
                                )
                            
                        }
                        {
                            morePosts.length > 0
                             &&  (
                                <MoreStories
                                 posts={morePosts} />
                                )
                            
                        }
                    </Container>
                </Layout>
            </>
            )
        ;
    }
export const getStaticProps = async () => {

    const allPosts = getAllPosts([
        'title', 
        'date', 
        'slug', 
        'author', 
        'coverImage', 
        'excerpt'
    ]);
    return {
            props: {
                allPosts
             }
         };
}
;
