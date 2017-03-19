"use strict";
const express = require("express");
const morgan = require("morgan"); //logger
const fs = require("fs");
var app = express();
app.use(require('./middlewares/cacheMiddleware'));
app.use(morgan('dev'));
app.use(express.static('public'));
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
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=index.js.map