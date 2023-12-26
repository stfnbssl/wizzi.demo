/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\layout.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
type Props = { 
    preview?: boolean;
    children: React.ReactNode;
};
const Layout = ({
    preview, 
    children
 }: Props) => {

    return  (
        <
        >
            <Meta
             />
            <div
             className="min-h-screen">
                <Alert
                 preview={preview} />
                <main
                >
                    {children}
                </main>
            </div>
            <Footer
             />
        </>
        )
    ;
}
;
export default Layout;
