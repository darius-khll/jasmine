import * as request from "request"
import * as express from "express";
import * as bodyParser from "body-parser"
import * as morgan from "morgan"; //logger
import * as https from "https"
import * as fs from "fs"
var app = express();

var projectConfig: { version: string } = require("./public/projectConfig.json");

app.use(require('./middlewares/cacheMiddleware'));
app.use(morgan('dev'));

app.use("/static", express.static('public'));
app.use(require('./middlewares/defaultHeaderMiddleware'));
app.use(require('./middlewares/controller'));
app.use(require('./middlewares/exceptionHandlerMiddleware'));

app.get('/*', (req, res) => {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


var options = {
    key: fs.readFileSync("privatekey.pem"),
    cert: fs.readFileSync("certificate.pem")
};

var PORT = 3000;
var HOST = 'localhost';
//var server = https.createServer(options, app).listen(PORT, HOST);

var server = app.listen(PORT, () => {
    console.log(`runs in port ${PORT}`);
});
export function closeServer() {
    server.close();
}
