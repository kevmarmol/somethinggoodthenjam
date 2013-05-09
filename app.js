var http = require('http');
var express = require('express');
var geoLoc = require('routes/geoLoc');
var app = express();

/* Configure app */
app.configure(function () {
	// set the port number to listen to
	app.set('port', process.env.PORT || 3000);

	// set the directory that holds the views
	app.set('views', __dirname + '/views');

	app.set('view engine', 'jade');

	app.use(express.logger('dev'));

	app.use(express.bodyParser());

	// simulates PUT and DELETE methods
	app.use(express.methodOverride());

	app.use(app.router);

	// this needs to change to /assets
	app.use('/src', express.static(__dirname + '/src'));

});

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Home'
	});
});

app.get('/windows', geoLoc.findAll);
app.get('/windows/:id', geoLoc.findById);
app.post('/windows', geoLoc.addLocation);
app.put('/windows/:id', geoLoc.updateLocation);
app.delete('/windows/:id', geoLoc.deleteLocation);

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});