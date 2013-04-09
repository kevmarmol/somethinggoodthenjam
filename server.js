//request http modedule
var http = require('http');

//request file system modedule
var fileSys = require('fs');

//read port and host values from a json file.
var config = JSON.parse(fileSys.readFileSync('config.json'));
var host = config.host;
var port = config.port;

var server = http.createServer(function(request, response){
	//console.log('Recieved request:' + request.url);
	//read the file
	fileSys.readFile("./"+request.url, function(error, data){
		if(error){
			response.writeHead(404, {'Content-type': "text/plain"});
			response.end('Page not found');
		}
		else{
			response.writeHead(200, {'Content-type': "text/html"});
			response.end(data);
		}
	});
	
});

server.listen(port,host, function(){
	console.log('currently listening from' + host + 'and Port:' +port);
});