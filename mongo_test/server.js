var express = require('express'),
    geoLoc = require('routes/geoLoc');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('geoLoc', geoLoc.findAll);
app.get('geoLoc/:id', geoLoc.findById);
app.post('geoLoc', geoLoc.addgeoLoc);
app.put('geoLoc/:id', geoLoc.updategeoLoc);
app.delete('geoLoc/:id', geoLoc.deletegeLoc);
 
app.listen(3000);