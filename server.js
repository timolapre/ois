var express = require('express');
var request = require("request");
var dotenv = require('dotenv').config({ path: 'config.env' })
var app = express();

var companies = ["Facebook", "Google", "Instagram", "Linkedin", "Tiktok", "Snapchat"];
var optionsGeneral = ["Languages", "Formats", "Quality"];
var optionsContent = ["Profile", "Gender", "Name", "First name", "Last name", "Full name","E-mails","Birthday","Hometown","Connections","Photos", "Comments", "Comments send", "Comments received"];
var marginBottom = Math.ceil(optionsGeneral.length/2)*100+80 +"px";

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

var port = process.env.PORT || 3000;

//Start Server 
app.listen(port, function () {
    console.log("Server running on port " + port);
});