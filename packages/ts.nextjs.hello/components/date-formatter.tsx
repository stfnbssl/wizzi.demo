/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.nextjs.hello\.wizzi\components\date-formatter.tsx.ittf
    utc time: Wed, 14 Jun 2023 04:39:24 GMT
*/
import {parseISO, format} from 'date-fns';
type Props = { 
    dateString: string;
};
const DateFormatter = ({
    dateString
 }: Props) => {

    const date = parseISO(dateString);
    return  (
        <time
         dateTime={dateString}>
            {format(date, 'LLLL	d, yyyy')}
        </time>
        )
    ;
}
;
export default DateFormatter;
