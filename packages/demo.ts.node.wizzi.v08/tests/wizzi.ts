import path from 'path';
import {wizziProds} from "../src/features/wizzi";
wizziProds.generateArtifactFs(
    path.join(__dirname, '..', 'ittf', 'basic.html.ittf'),
    {},
    {}
    ).then((result:any) => {
        console.log('result', result);
    }).catch((err:any) =>{
        console.log('err', err);
    })