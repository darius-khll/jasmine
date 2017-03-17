openssl genrsa -out privatekey.pem 1024

openssl req -new -key privatekey.pem -out certrequest.csr -config C:\OpenSSL-Win64\bin\openssl.cfg

openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

 

httpserver.js source code:

var https = require(‘https’);
var fs = require(‘fs’);

var options = {
key: fs.readFileSync(“privatekey.pem”),
cert: fs.readFileSync(“certificate.pem”)
};

https.createServer(options, function(req,resp){
resp.writeHead(200);
resp.write(“You are connected to https server!”);
resp.end();
}).listen(8080);