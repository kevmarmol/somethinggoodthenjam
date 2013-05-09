//http://172.27.64.72/

var io = require('socket.io').listen(8080);

var thisFeed = '';

io.sockets.on('connection', function (socket) {
  socket.emit('handshake', { hello: 'world' });


  socket.on('sendData', function (data) {
    console.log('Server has data: '+data);
    thisFeed = data;
       //get stream from socket sendData
        peerToPeer(data);
        // more code will go here 


  });

  socket.on('getStream', function(){
    socket.emit('returnedStream', thisFeed);
  });

});



    var servers = null;
    var pc1 = new webkitRTCPeerConnection(servers);
    var pc2 = new webkitRTCPeerConnection(servers);



        
     

    

    function onError() { 
        alert('There has been a problem retrieving the streams - did you allow access?'); 
    }

    function peerToPeer(stream){  
        console.log(typeof stream);

        
        pc1.addStream(stream);

        pc1.createOffer(gotDescription1);
        pc2.onaddstream = gotRemoteStream;
        //pc2.addStream(stream);

        pc1.onicecandidate = iceCallback1; 
        pc2.onicecandidate = iceCallback2;
    }

    function gotDescription1(desc){
        pc1.setLocalDescription(desc);
        pc2.setRemoteDescription(desc);
        pc2.createAnswer(gotDescription2);
    }

    function gotDescription2(desc){
        pc2.setLocalDescription(desc);
        pc1.setRemoteDescription(desc);
    }

   

    function iceCallback1(event){
      if (event.candidate) {
        pc2.addIceCandidate(new RTCIceCandidate(event.candidate));
      }
    }
          
    function iceCallback2(event){
      if (event.candidate) {
        pc1.addIceCandidate(new RTCIceCandidate(event.candidate));
      }
    }
    
