import * as express from "express";
var router = express.Router();

const route = '/third';

router.get(`${route}/get`, (req, res) => {
    res.end('third controller');
});

module.exports = router;