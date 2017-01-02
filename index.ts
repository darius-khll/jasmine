
import * as express from "express";
var app = express();

app.get('/', function (req, res) {
    console.log("/");
    res.send('Hello World');
});

var server = app.listen(3000);

export function closeServer() {
    server.close();
}