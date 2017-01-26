var monthDataStatistics = [];
var monthBotUsage = [];

getMonthStatistics();
displayStatistics();

function getMonthStatistics()
{
	monthDataStatistics = getMonthDataStatistics();
	monthBotUsage = getMonthBotUsage();
	
}

function displayStatistics()
{
	var displayMonthDataStatistics = document.getElementById("month-data-statistics");
	if(displayMonthDataStatistics === null)
	{
		displayMonthDataStatistics = createCanvas("month-data-statistics");
	}
	createStatisticsPieChart(displayMonthDataStatistics);
	
	var displayMonthBotUsage = document.getElementById("month-bot-usage");
	if(displayMonthBotUsage === null)
	{
		displayMonthBotUsage = createCanvas("month-bot-usage");
	}
	createStatisticsBarChart(displayMonthBotUsage);
}

function createStatisticsPieChart(displayMonthDataStatistics)
{
	var labels = ["Satisfied", "Unsatisfied"];
	//var backgroundcolors = ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)'];
	//var bordercolors = ['rgba(255,99,132,1)','rgba(54, 162, 235, 1)'];
	var title = "Percentage of feedback this month";
	createPieChart(displayMonthDataStatistics, labels, getMonthDataStatistics(), title);
}

function createStatisticsBarChart(displayMonthBotUsage)
{
	var labels = [];
	for(var i = 0; i<31; i++)
	{
		labels.push(i+1);
	}
	var title = "Number of questions asked";
	createBarChart(displayMonthBotUsage, labels, getMonthBotUsage(),title);
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

function getMonthDataStatistics()
{
	return [15,20];
}

function getMonthBotUsage()
{
	return [35, 19, 0, 0, 0, 0];
}