"use strict";
const express = require("express");
var app = express();
app.get('/', (req, res) => {
    console.log("/");
    res.send('Hello World');
});
var server = app.listen(3000);
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=index.js.map