var express = require('express');
var router = express.Router();

const description = [];
const images= [];

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log();
    let obj = {
        title: 'Products gallery',
        describtion: 'test',
        imgURL: 'images/01.jpg' //'http://vignette3.wikia.nocookie.net/disneyskickinit/images/9/97/Dfsd.png/revision/20121101232515'
    }


    res.render('index', obj);
});

module.exports = router;
