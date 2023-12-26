/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\intro.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import {CMS_NAME} from '../lib/constants';
const Intro = () => {

    return  (
        <section
         className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1
             className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Blog.
            </h1>
            <h4
             className="text-center md:text-left text-lg mt-5 md:pl-8">
                A statically generated blog example using
                {' '}
                <a
                 href="https://nextjs.org/" className="underline hover:text-blue-600 duration-200 transition-colors">
                    Next.js
                </a>
                {' '}
                and
                {CMS_NAME}
                .
            </h4>
        </section>
        )
    ;
}
;
export default Intro;
