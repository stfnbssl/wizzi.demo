/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.starter\.wizzi\src\utils\functionWrappers.ts.ittf
    utc time: Thu, 29 Jun 2023 08:52:23 GMT
*/
export const promisify = (f, self) => {

    return function(...args) {
        
            
            // ritorna una funzione wrapper
            return new Promise((resolve, reject) => {
                
                    function callback(err, result) {
                    
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                    }
                    // aggiunge la nostra callback custom alla fine degli argomenti
                    args.push(callback);
                    // chiama la funzione originale
                    f.call(self || this, ...args);
                }
                );
        };
}
;
