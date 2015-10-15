var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var browserSync = require('browser-sync');


var db = require('./config/db.js');
var port = process.env.PORT || 9000; 

mongoose.connect(db.url); 

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/www')); 
require('./app/routes.js')(app); // configure our routes

app.listen(port);                   
console.log('Running on port ' + port);
exports = module.exports = app;    