var socket = io.connect('http://phonegap.local/');
socket.on('connect', function () {
	socket.send('hi');
	socket.on('message', function(msg){
		});
	

});
	
