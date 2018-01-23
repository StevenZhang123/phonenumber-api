var express = require('express');
var app = express();

var controller = require('./controller');
app.use('/', controller);

module.exports = app;
