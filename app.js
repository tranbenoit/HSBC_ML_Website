var express = require('express');
var app = express();
var PORT = 8080;
var routes = require('./src/routes/route');
var http = require('http').Server(app);
var io = require('socket.io')(http);

function listenSuccess(){
	console.log("Server listening on: http://localhost:%s", PORT);
}


app
.use(routes)

app.get('/test', function(request,response){
	response.send(http);
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(PORT, function(){
  console.log('listening on *:'+PORT);
});