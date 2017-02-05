import * as request from "request"
import * as express from "express";
import * as bodyParser from "body-parser"
import * as morgan from "morgan"; //logger
var app = express();

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






app.get('/test', (req, res) => {
    res.send('Hello World');
});
app.get('/getRecords', (req, res) => {
    let records = ['a', 'b', 'c'];
    res.end(JSON.stringify(records));
});
app.post('/postRecords', (req, res) => {
    res.end('done');
});





app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(`internal server error!`)
});
app.get('/*', (req, res) => {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
var server = app.listen(3000, () => {
    console.log('runs in port 3000');
});
export function closeServer() {
    server.close();
}
