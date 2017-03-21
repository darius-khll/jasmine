import * as express from "express";
var router = express.Router();

let controllerItems = ['secondController', 'thirdController'];
for(let item of controllerItems)
{
   router.use(require(`./../controller/${item}`)); 
}


router.get('/test', (req, res) => {
    res.send('Hello World');
});
router.get('/getRecords/:id', (req, res) => {
    let records = ['a', 'b', 'c', req.params.id];
    res.end(JSON.stringify(records));
});
router.post('/postRecords', (req, res) => {
    res.end('done');
});

module.exports = router;