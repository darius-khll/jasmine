import * as express from "express";
var router = express.Router();

const route = '/second';

router.get(`${route}/get`, (req, res) => {
    res.end('second controller');
});

module.exports = router;