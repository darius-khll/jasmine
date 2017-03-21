
import * as http from 'http'

export class FirstController {
    public static GetItems(req: http.ServerRequest, res: http.ServerResponse) {
        if (1 == 1)
            throw Error('err1');
        res.end('first controller');
    }
}