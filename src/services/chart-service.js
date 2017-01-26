function createPieChart(canvasElement, labels, datas, title)
{
	var backgroundcolors = getRandomColor(datas.length);
	var createdChart = new Chart(canvasElement, {
		type: 'pie',
		data: {
			labels: labels,
			datasets: [{
				data: datas,
				backgroundColor: backgroundcolors,
				borderColor: getRandomBorderColor(backgroundcolors),
				borderWidth: 1
			}]
		},
		options: {
			title: {
				display: true,
				text : title
			},
			legend: {
				display: true
			},
			responsive:false,
			maintainAspectRatio: false
		}
	});
	return createdChart;
}


function createBarChart(canvasElement, labels, datas, title)
{
	var backgroundcolors = getRandomColor(datas.length);
	var createdChart = new Chart(canvasElement, {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				label: "Number of question asked a day",
				data: datas,
				backgroundColor: backgroundcolors,
				borderColor: getRandomBorderColor(backgroundcolors),
				borderWidth: 1
			}]
		},
		options: {
			title: {
				display: true,
				text : title
			},
			legend: {
				display: true
			},
			responsive:false,
			maintainAspectRatio: false
		}
	});
	return createdChart;
}

function getRandomColor(maxColor)
{
	var colors = [];
	var letters = '0123456789ABCDEF'.split('');
	 var color = '#';
	for(var numberOfBar = 0; numberOfBar < maxColor; numberOfBar++)
	{
		do
		{
			color = '#';
			for (var i = 0; i < 6; i++ ) 
			{
				color += letters[Math.floor(Math.random() * 16)];
			}
		}while(colors.indexOf(color) != -1);
		colors.push(color);
	}
    
    return colors;
}

function getRandomBorderColor(colors)
{
	for(var i = 0; i<colors.length; i++)
	{
		colors[i].replace("0.2", "1");
	}
	return colors;
}