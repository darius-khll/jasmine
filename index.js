"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const request = require("request");
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
class CustomRequest {
    static get(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                request.get(uri, (error, response, body) => {
                    console.log(body);
                    let retObj = { body: body, error: error, response: response };
                    return res(retObj);
                });
            });
        });
    }
}
exports.CustomRequest = CustomRequest;
//# sourceMappingURL=index.js.map