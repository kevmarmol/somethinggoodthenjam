//http://172.27.64.72/

var io = require('socket.io').listen(8080);

var users = [];

io.sockets.on('connection', function (socket) {
  socket.emit('handshake', { hello: 'world' });
  socket.on('sendData', function (data) {
    console.log('Server has data: '+data);
    users.push(data);
    socket.emit('returnFromServer', users);
  });
});