var express = require('express');
var router = express.Router();

// const description = [
//     "Citing 'fluctuating foreign exchange rates', Adobe has notified Creative Cloud subscribers in the UK and Sweden that they can expect to see their fees increase soon.",
//     "The price hikes will take effect starting March 6 for month-to-month subscribers;",
//     "Prices vary by plan, but users are reporting around a £10 per month increase. ",
//     "Currency exchange rates have fluctuated significantly over the last few years.",
//     "Like many US-based global companies, Adobe is making pricing adjustments in a number of countries. "
// ];
// const images = [
//     '01', '02', '03', '04', '05'
// ];

// let buttonPrev = document.getElementById('prev');
// let buttonNext = document.getElementById('next');
// var template = Handlebars.compile(source);

// document.getElementById('next').addEventListener('click', function () {
//     iter++;
// });

const description = [
    "Citing 'fluctuating foreign exchange rates', Adobe has notified Creative Cloud subscribers in the UK and Sweden that they can expect to see their fees increase soon.",
    "The price hikes will take effect starting March 6 for month-to-month subscribers;",
    "Prices vary by plan, but users are reporting around a £10 per month increase. ",
    "Currency exchange rates have fluctuated significantly over the last few years.",
    "Like many US-based global companies, Adobe is making pricing adjustments in a number of countries. "
];
const images = [
    '01', '02', '03', '04', '05'
];
const title = "Photo gallery";
let iter = 0;

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log();
    let obj = {
        title: title,
        describtion: description[iter],
        imgURL: 'images/' + images[iter] + '.jpg' //'http://vignette3.wikia.nocookie.net/disneyskickinit/images/9/97/Dfsd.png/revision/20121101232515'
    };

    res.render('index', obj);
});

router.get('/prev', function (req, res) {
    if (iter > 0) iter--;
    let obj = {
        describtion: description[iter],
        imgURL: 'images/' + images[iter] + '.jpg' //'http://vignette3.wikia.nocookie.net/disneyskickinit/images/9/97/Dfsd.png/revision/20121101232515'
    };

    res.render('index', obj);
});

router.get('/next', function (req, res) {
    if (iter < images.length && iter < description.length) iter++;
    else if (iter = images.length || iter == description.length) iter = 0;

    let obj = {
        describtion: description[iter],
        imgURL: 'images/' + images[iter] + '.jpg' //'http://vignette3.wikia.nocookie.net/disneyskickinit/images/9/97/Dfsd.png/revision/20121101232515'
    };

    res.render('index', obj);
});


module.exports = router;
