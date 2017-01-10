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
// declare namespace jasmine{
//     interface Spy {
//         andReturn(object: any): any;
//     }
// } 
//# sourceMappingURL=index.js.map