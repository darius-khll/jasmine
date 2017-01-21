import * as request from 'request'
import * as express from "express";
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

var server = app.listen(3000, () => {
    console.log('runs in port 3000');
});

export function closeServer() {
    server.close();
}
