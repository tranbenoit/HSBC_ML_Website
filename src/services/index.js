var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		type: 'radar',
		data: {
			labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
			datasets: [{
				label: "My First dataset",
				backgroundColor: "rgba(179,181,198,0.2)",
				borderColor: "rgba(179,181,198,1)",
				pointBackgroundColor: "rgba(179,181,198,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(179,181,198,1)",
				data: [65, 59, 90, 81, 56, 55, 40]
			}]
		},
		options: {
			legend: false,
			responsive:false,
			maintainAspectRatio: false
		}
	});
	
	var ctx2 = document.getElementById("myChart2");
	var myChart2 = new Chart(ctx2, {
		type: 'pie',
		data: {
			labels: ["Satisfied", "Unsatisfied"],
			datasets: [{
				data: [15,20],
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
	var myChart3 = new Chart(ctx3, {
		type: 'bar',
		data: {
			labels: ["January", "February", "March", "April", "May", "June"],
			datasets: [
				{
					label: '# of Votes',
					data: [35, 19, 0, 0, 0, 0],
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