var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var staticContentFolder;
staticContentFolder = __dirname + '/public';

app.use('/static', express.static(staticContentFolder));

require('./app/config/express-routing.js')(app);

app.listen(PORT, function(){
	console.log("Now listening on PORT: " + PORT);
});