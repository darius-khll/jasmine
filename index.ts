
import * as express from "express";
var app = express();

app.get('/', (req, res) => {
    console.log("/");
    res.send('Hello World');
});

var server = app.listen(3000);

export function closeServer() {
    server.close();
}

// declare namespace jasmine{
//     interface Spy {
//         andReturn(object: any): any;
//     }
// }