"use strict";
const express = require("express");
var app = express();
app.use(express.static('public'));
app.get('/test', (req, res) => {
    res.send('Hello World');
});
app.get('/*', (req, res) => {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
var server = app.listen(3000, () => {
    console.log('runs in port 3000');
});
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=index.js.map