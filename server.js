var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var staticContentFolder;
staticContentFolder = __dirname + '/public';

app.use('/static', express.static(staticContentFolder));

mongoose.connect('mongodb://nytscrubber:nytscrubber@ds013584.mlab.com:13584/nytscrubber');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});


require('./app/config/express-routing.js')(app);

app.listen(PORT, function(){
	console.log("Now listening on PORT: " + PORT);
});