console.log('-- express.js -----');

var express = require('express');
var http = require('http');

var path = require('path');

// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// Views
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

module.exports = app;