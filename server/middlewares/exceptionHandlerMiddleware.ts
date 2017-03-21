import * as express from "express";
var router = express.Router();

router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(`internal server error!`)
});

module.exports = router;