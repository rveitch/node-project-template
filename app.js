'use strict';
var dotenv = require('dotenv');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
//var bodyParser = require('body-parser');

dotenv.load();
var root_url = (process.env.ROOT_URL || 'http://localhost');
var port = Number(process.env.PORT || 3000);

/******************************** EXPRESS SETUP *******************************/

var app = express();
app.set('json spaces', 2);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

/******************************** EXPRESS ROUTES ******************************/

app.get('/', function (req, res) {
	res.send( 'Hello World' );
});

/******************************** SERVER LISTEN *******************************/

// Server Listen
app.listen( port, function () {
	console.log( '\nApp server is running on ' + root_url +':' + port + '\n' );
});
