var express = require('express');
var request = require("request");
var dotenv = require('dotenv').config({ path: 'config.env' })
var app = express();

var companies = ["Facebook", "Google", "Instagram", "Linkedin", "Tiktok", "Snapchat"];
var optionsGeneral = ["Languages", "Formats", "Niveaus"];
var optionsContent = ["Gender", "Messages", "Photo's", "Followers"];
var marginBottom = Math.ceil(optionsGeneral.length/2)*100 +"px";

app.set('view engine', 'ejs');
app.use(express.static('public'));

// index page 
app.get('/', function (req, res) {
    res.render('pages/index', {});
});

app.get('/data1', function (req, res) {
    res.render('pages/datacompany', {companies});
});

app.get('/data2', function (req, res) {
    res.render('pages/dataoptions', {optionsGeneral, optionsContent, marginBottom});
});

app.get('/data3', function (req, res) {
    res.render('pages/datacompare', {});
});

app.get('/about', function (req, res) {
    res.render('pages/about', {});
});

//Start Server 
app.listen(8032, function () {
    console.log("Server running on port 8032");
});