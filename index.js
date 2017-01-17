"use strict";
const request = require("request");
const express = require("express");
var app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
var server = app.listen(3000);
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
class CustomRequest {
    static get(uri) {
        return new Promise((res, rej) => {
            request.get(uri, (error, response, body) => {
                console.log(body);
                let retObj = { body: body, error: error, response: response };
                return res(retObj);
            });
        });
    }
}
exports.CustomRequest = CustomRequest;
//# sourceMappingURL=index.js.map