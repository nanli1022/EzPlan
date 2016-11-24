var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var routes = require('./routes.js');
var FB = require('fb');

var app = express();

//assets and files
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.listen(3000);
console.log('Listening on port 3000');
