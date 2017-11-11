'use strict';
var dotenv = require('dotenv');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var request = require('request');
var _ = require('lodash');

dotenv.load();
var root_url = (process.env.ROOT_URL || 'http://localhost');
var port = Number(process.env.PORT || 3000);

/******************************** EXPRESS SETUP *******************************/

var app = express();
app.set('json spaces', 2);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/******************************** EXPRESS ROUTES ******************************/

app.get('/', function (req, res) {
	res.send( 'Hello World' );
});

/*
request({
  uri: 'https://graph.facebook.com/v2.9/',
  method: 'POST',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36',
  },
  formData: formData,
}, function (error, response, body) {
  var fbStatus = JSON.parse(response.body);
  console.log(response.body);
});
*/

/******************************** SERVER LISTEN *******************************/

// Server Listen
app.listen( port, function () {
	console.log( '\nApp server is running on ' + root_url +':' + port + '\n' );
});
