var express = require('express');
var app = express();
var PORT = 8080;
var routes = require('./src/routes/route');

function listenSuccess(){
	console.log("Server listening on: http://localhost:%s", PORT);
}


app
.use(routes)
.listen(PORT,listenSuccess); 