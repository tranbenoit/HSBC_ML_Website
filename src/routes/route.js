var express = require('express');
var router = express.Router();
var path = require('path');
var root_directory = './';
var imported_scripts = require('./import_scripts');

router.get('/', function(request,response){
	response.sendFile('public/index.html',{root : root_directory});
});

router.get('/statistics.html', function(request,response){
	response.sendFile('public/statistics/statistics.html',{root : root_directory});
})

router
.use(imported_scripts);

module.exports = router;