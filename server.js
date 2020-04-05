var express = require('express');
var request = require("request");
var dotenv = require('dotenv').config({ path: 'config.env' })
var app = express();
var session = require('express-session');

var companies = ["Facebook", "Google", "Instagram", "Linkedin", "Tiktok", "Snapchat"];
var optionsGeneral = ["Languages", "Formats", "Quality"];
var optionsContent = ["Profile", ["Gender", "Name", "First Name"], "Name", "First name", "Last name", "Full name", "E-mails", "Birthday", "Hometown", "Connections", "Photos", "Comments", "Comments send", "Comments received"];
var marginBottom = Math.ceil(optionsGeneral.length / 2) * 100 + 100 + "px";

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// index page 
app.get('/', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/index', { loggedin });
});

app.get('/data1', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/datacompany', { companies, loggedin });
});

app.get('/data2', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/dataoptions', { optionsGeneral, optionsContent, marginBottom, loggedin });
});

app.get('/data3', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/datacompare', { loggedin });
});

app.get('/share', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/shareoptions', { optionsGeneral, optionsContent, marginBottom, loggedin });
});

app.get('/about', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/about', { loggedin });
});

app.get('/login', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/login', { loggedin });
});

app.get('/register', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/register', { loggedin });
});

app.get('/loggedin', function (req, res) {
    var loggedin = 0;
    if (req.session.loggedin) {
        loggedin = req.session.loggedin;
    }
    res.render('pages/loggedin', { loggedin });
});

app.post('/login', function (req, res) {
    req.session.loggedin = 1;
    res.redirect('loggedin');
});

app.post('/logout', function (req, res) {
    req.session.loggedin = 0;
    if (req.get('referer') == 'http://localhost:3000/loggedin' || req.get('referer') == 'https://oisddd5.herokuapp.com/loggedin') {
        res.redirect('/');
    } else{
        res.redirect(req.get('referer'));
    }
});

var port = process.env.PORT || 3000;

//Start Server 
app.listen(port, function () {
    console.log("Server running on port " + port);
});