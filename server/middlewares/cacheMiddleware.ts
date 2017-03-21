import * as express from "express";
var router = express.Router();

router.use((req, res, next) => {

    let val = '';
    for (let i = 0; i < 6; i++) {
        val += (Math.random() * 100).toFixed(0);
    }

    res.header('Cache-Control', 'max-age=10000000, public');
    //res.header('Pragma', 'public');
    //res.header('Expires', 'max');
    //res.header('Etag', val);
    next();
});

module.exports = router;