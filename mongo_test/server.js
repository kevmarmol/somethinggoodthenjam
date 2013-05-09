var express = require('express'),
    geoLoc = require('routes/geoLoc');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

app.get('/geoLoc', geoLoc.findAll);
app.get('/geoLoc/:id', geoLoc.findById);
app.post('/geoLoc', geoLoc.addgeoDb);
app.put('/geoLoc/:id', geoLoc.updategeoDb);
app.delete('/geoLoc/:id', geoLoc.deletegeoDb);

app.listen(3000);