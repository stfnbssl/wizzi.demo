/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\avatar.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
type Props = { 
    name: string;
    picture: string;
};
const Avatar = ({
    name, 
    picture
 }: Props) => {

    return  (
        <div
         className="flex items-center">
            <img
             src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
            <div
             className="text-xl font-bold">
                {name}
            </div>
        </div>
        )
    ;
}
;
export default Avatar;
