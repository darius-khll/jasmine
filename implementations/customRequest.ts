import * as request from 'request'

// declare namespace jasmine{
//     interface Spy {
//         andReturn(object: any): any;
//     }
// }

interface ICustomRequestTaken {
    error: any;
    response: any;
    body: any;
}

export class CustomRequest {
    public static get(uri: string): Promise<ICustomRequestTaken> {
        return new Promise<ICustomRequestTaken>((res, rej) => {
            request.get(uri, (error, response, body) => {
                console.log(body);
                let retObj : ICustomRequestTaken = {body: body, error: error, response: response};
                return res(retObj);
            })
        });
    }
}