var ctx2 = document.getElementById("myChart2");
if(ctx2 === null)
{
	ctx2 = createCanvas("myChart2");
}
var myChart2 = new Chart(ctx2, {
	type: 'pie',
	data: {
		labels: ["Satisfied", "Unsatisfied"],
		datasets: [{
			data: getMonthDataStatistics(),
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)'
			],
			borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		title: {
			display: true,
			text : "Percentage of feedback this month"
		},
		legend: {
			display: true
		},
		responsive:false,
		maintainAspectRatio: false
	}
});


var ctx3 = document.getElementById("myChart3");
if(ctx3 === null)
{
	ctx3 = createCanvas("myChart3");
}
var myChart3 = new Chart(ctx3, {
	type: 'bar',
	data: {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: 'Number of questions asked',
				data: getYearBotUsage(),
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}
		]
	},
	options: {
		title: {
			display: true,
			text : "Number of feedback per month"
		},
		legend: false,
		responsive:false,
		maintainAspectRatio: false
	}
});

loadConfiguration();


//------------------------------- Functions
function getMonthDataStatistics()
{
	return [15,20];
}

function getYearBotUsage()
{
	return [35, 19, 0, 0, 0, 0];
}

function createCanvas(nameId)
{
	var canvas = document.createElement("canvas");
	canvas.setAttribute("id", nameId);
	canvas.setAttribute("width", 400);
	canvas.setAttribute("height", 400);
	document.getElementById("cd-main-content").appendChild(canvas);
	return canvas;
}

function loadConfiguration(){
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
			responseT = xmlHttp.responseText;
			response = JSON.parse(xmlHttp.responseText);
			console.log(response);
			connectToServerSocketIO(response.socketio.hostname);
		}
    }
    xmlHttp.open("GET", '/getConfiguration', true);
    xmlHttp.send();
}

function connectToServerSocketIO(hostname)
{
	var socket = io(hostname);
	  $('form').submit(function(){
		socket.emit('chat message', $('#m').val());
		$('#m').val('');
		return false;
	  });
	  socket.on('chat message', function(msg){
		$('#messages').append($('<li>').text(msg));
	  });
}

