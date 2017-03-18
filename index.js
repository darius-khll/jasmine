"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan"); //logger
const fs = require("fs");
var app = express();
app.use(function (req, res, next) {
    let val = '';
    for (let i = 0; i < 6; i++) {
        val += (Math.random() * 100).toFixed(0);
    }
    res.header('Cache-Control', 'max-age=10000000, public');
    //res.header('Pragma', 'public');
    //res.header('Expires', 'max');
    //res.header('Etag', val);
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});
app.use(morgan('dev'));
app.use(express.static('public'));
let controllerItems = ['secondController', 'thirdController'];
for (let item of controllerItems) {
    app.use(require(`./controller/${item}`));
}
app.get('/test', (req, res) => {
    res.send('Hello World');
});
app.get('/getRecords/:id', (req, res) => {
    let records = ['a', 'b', 'c', req.params.id];
    res.end(JSON.stringify(records));
});
app.post('/postRecords', (req, res) => {
    res.end('done');
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`internal server error!`);
});
app.get('/*', (req, res) => {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
var options = {
    key: fs.readFileSync("privatekey.pem"),
    cert: fs.readFileSync("certificate.pem")
};
var PORT = 3002;
var HOST = 'localhost';
//var server = https.createServer(options, app).listen(PORT, HOST);
var server = app.listen(3001, () => {
    console.log('runs in port 3000');
});
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=index.js.map