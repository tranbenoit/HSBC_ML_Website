var express = require('express');
var router = express.Router();
var path = require('path');
var root_directory = './';

router.get('/chart.js', function(request,response){
	response.sendFile('node_modules/chart.js/dist/Chart.min.js',{root : root_directory});
});

router.get('/index.js', function(request,response){
	response.sendFile('src/services/index.js',{root : root_directory});
});

router.get('/index.css', function(request,response){
	response.sendFile('public/index.css',{root : root_directory});
});

router.get('/statistics.js', function(request,response){
	response.sendFile('src/services/statistics.js',{root : root_directory});
});

router.get('/chart-service.js', function(request,response){
	response.sendFile('src/services/chart-service.js',{root : root_directory});
});
module.exports = router;