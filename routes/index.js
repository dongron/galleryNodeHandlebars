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

var fs = require('fs');
var data = JSON.parse(fs.readFileSync('public/descriptions.json', 'utf8'));

const title = "Photo gallery";
let iter = 0;

router.get('/', function (req, res, next) {
    let obj = {
        title: title,
        describtion: data[iter].desc,
        imgURL: 'images/' + data[iter].photoName
    };

    res.render('index', obj);
});

router.get('/prev', function (req, res) {
    if (iter > 0) iter--;
    res.redirect('/');
});

router.get('/next', function (req, res) {
    if (iter < images.length - 1 && iter < description.length - 1) iter++;
    else if (iter = images.length || iter == description.length) iter = 0;
    res.redirect('/');
});


module.exports = router;
