$('document').ready(function(){	
	chartSamples();
	mapSamples();
});
function chartSamples(){		
	if (document.getElementById('line-canvas')) {
		var lebar = $('#line-canvas').parent('.panel-body').width();
		$('#line-canvas').attr('width', lebar);
		
		var lineOptions = {					
			//Boolean - If we show the scale above the chart data			
			scaleOverlay : false,		
			//Boolean - If we want to override with a hard coded scale
			scaleOverride : false,		
			//** Required if scaleOverride is true **
			//Number - The number of steps in a hard coded scale
			scaleSteps : null,
			//Number - The value jump in the hard coded scale
			scaleStepWidth : null,
			//Number - The scale starting value
			scaleStartValue : null,
			//String - Colour of the scale line	
			scaleLineColor : "rgba(255,255,255,.2)",		
			//Number - Pixel width of the scale line	
			scaleLineWidth : 1,
			//Boolean - Whether to show labels on the scale	
			scaleShowLabels : true,		
			//Interpolated JS string - can access value
			scaleLabel : "<%=value%>",		
			//String - Scale label font declaration for the scale label
			scaleFontFamily : "'Arial'",		
			//Number - Scale label font size in pixels	
			scaleFontSize : 12,		
			//String - Scale label font weight style	
			scaleFontStyle : "normal",		
			//String - Scale label font colour	
			scaleFontColor : "rgba(255,255,255,.5)",		
			//Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,		
			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(255,255,255,.1)",		
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,			
			//Boolean - Whether the line is curved between points
			bezierCurve : true,		
			//Boolean - Whether to show a dot for each point
			pointDot : true,		
			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,		
			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 2,		
			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,		
			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,		
			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,		
			//Boolean - Whether to animate the chart
			animation : true,
			//Number - Number of animation steps
			animationSteps : 60,		
			//String - Animation easing effect
			animationEasing : "easeOutQuart",
			//Function - Fires when the animation is complete
			onAnimationComplete : null		
		}

		var lineChartData = {
			labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
			datasets : [
				{
					fillColor : "rgba(82,208,70,0.3)",
					strokeColor : "rgba(82,208,70,1)",
					pointColor : "rgba(82,208,70,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(241,196,15,0.6)",
					strokeColor : "rgba(241,196,15,1)",
					pointColor : "rgba(241,196,15,1)",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				}
			]
			
		}

		var myLine = new Chart(document.getElementById("line-canvas").getContext("2d")).Line(lineChartData,lineOptions);
		
		$(window).resize(function() {
			$('#line-canvas').attr('width', $('#line-canvas').parent('.panel-body').width()).css('width',$('#line-canvas').parent('.panel-body').width()+'px');
			myLine = new Chart(document.getElementById("line-canvas").getContext("2d")).Line(lineChartData,lineOptions);
		});
	}
	
	if (document.getElementById('bar-canvas')) {
		var lebar = $('#bar-canvas').parent('.panel-body').width();
		$('#bar-canvas').attr('width', lebar);
		
		var barOptions = {					
			//Boolean - If we show the scale above the chart data			
			scaleOverlay : false,		
			//Boolean - If we want to override with a hard coded scale
			scaleOverride : false,		
			//** Required if scaleOverride is true **
			//Number - The number of steps in a hard coded scale
			scaleSteps : null,
			//Number - The value jump in the hard coded scale
			scaleStepWidth : null,
			//Number - The scale starting value
			scaleStartValue : null,
			//String - Colour of the scale line	
			scaleLineColor : "rgba(255,255,255,.2)",		
			//Number - Pixel width of the scale line	
			scaleLineWidth : 1,
			//Boolean - Whether to show labels on the scale	
			scaleShowLabels : true,		
			//Interpolated JS string - can access value
			scaleLabel : "<%=value%>",		
			//String - Scale label font declaration for the scale label
			scaleFontFamily : "'Arial'",		
			//Number - Scale label font size in pixels	
			scaleFontSize : 12,		
			//String - Scale label font weight style	
			scaleFontStyle : "normal",		
			//String - Scale label font colour	
			scaleFontColor : "rgba(255,255,255,.5)",		
			//Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,		
			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(255,255,255,.1)",		
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,			
			//Boolean - Whether the line is curved between points
			bezierCurve : true,		
			//Boolean - Whether to show a dot for each point
			pointDot : true,		
			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,		
			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 2,		
			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,		
			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,		
			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,		
			//Boolean - Whether to animate the chart
			animation : true,
			//Number - Number of animation steps
			animationSteps : 60,		
			//String - Animation easing effect
			animationEasing : "easeOutQuart",
			//Function - Fires when the animation is complete
			onAnimationComplete : null		
		}

		var barChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(82,208,70,0.3)",
					strokeColor : "rgba(82,208,70,0.1)",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(241,196,15,0.6)",
					strokeColor : "rgba(241,196,15,0.1)",
					data : [28,48,40,19,96,27,100]
				}
			]
			
		}

		var myBar = new Chart(document.getElementById("bar-canvas").getContext("2d")).Bar(barChartData,barOptions);
		$(window).resize(function() {
			$('#bar-canvas').attr('width', $('#bar-canvas').parent('.panel-body').width()).css('width',$('#bar-canvas').parent('.panel-body').width()+'px');
			myBar = new Chart(document.getElementById("bar-canvas").getContext("2d")).Bar(barChartData,barOptions);
		});
	}
	
	if (document.getElementById('pie-canvas')) {
		var lebar = $('#pie-canvas').parent('.panel-body').width();
		$('#pie-canvas').attr('width', lebar);
		
		var pieOptions = {
			//Boolean - Whether we should show a stroke on each segment
			segmentShowStroke : true,			
			//String - The colour of each segment stroke
			segmentStrokeColor : "rgba(255,255,255,0.15)",			
			//Number - The width of each segment stroke
			segmentStrokeWidth : 1,			
			//Boolean - Whether we should animate the chart	
			animation : true,			
			//Number - Amount of animation steps
			animationSteps : 100,			
			//String - Animation easing effect
			animationEasing : "easeOutBounce",			
			//Boolean - Whether we animate the rotation of the Pie
			animateRotate : true,
			//Boolean - Whether we animate scaling the Pie from the centre
			animateScale : false,			
			//Function - Will fire on animation completion.
			onAnimationComplete : null
		}

		var pieData = [{
				value: 30,
				color:"rgba(39,174,96,0.40)"
			},{
				value : 50,
				color : "rgba(241,196,15,0.40)"
			},{
				value : 100,
				color : "rgba(231,76,60,0.40)"
			}];

		var myPie = new Chart(document.getElementById("pie-canvas").getContext("2d")).Pie(pieData,pieOptions);
		$(window).resize(function() {
			$('#pie-canvas').attr('width', $('#pie-canvas').parent('.panel-body').width()).css('width',$('#pie-canvas').parent('.panel-body').width()+'px');
			myPie = new Chart(document.getElementById("pie-canvas").getContext("2d")).Pie(pieData,pieOptions);
		});
	}
	
	if (document.getElementById('doughnut-canvas')) {
		var lebar = $('#doughnut-canvas').parent('.panel-body').width();
		$('#doughnut-canvas').attr('width', lebar);
		
		var doughnutOptions = {
			//Boolean - Whether we should show a stroke on each segment
			segmentShowStroke : true,			
			//String - The colour of each segment stroke
			segmentStrokeColor : "rgba(255,255,255,0.15)",			
			//Number - The width of each segment stroke
			segmentStrokeWidth : 1,			
			//The percentage of the chart that we cut out of the middle.
			percentageInnerCutout : 60,			
			//Boolean - Whether we should animate the chart	
			animation : true,			
			//Number - Amount of animation steps
			animationSteps : 100,			
			//String - Animation easing effect
			animationEasing : "easeOutBounce",			
			//Boolean - Whether we animate the rotation of the Doughnut
			animateRotate : true,
			//Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale : false,			
			//Function - Will fire on animation completion.
			onAnimationComplete : null
		}
		
		var doughnutData = [{
			value: 30,
			color:"rgba(248,245,197,0.3)"
		},{
			value : 50,
			color : "rgba(248,245,197,0.3)"
		},{
			value : 100,
			color : "rgba(248,245,197,0.3)"
		},{
			value : 40,
			color : "rgba(248,245,197,0.3)"
		},{
			value : 120,
			color : "rgba(248,245,197,0.3)"
		}];
		
		var myDoughnut = new Chart(document.getElementById("doughnut-canvas").getContext("2d")).Doughnut(doughnutData,doughnutOptions);
		$(window).resize(function() {
			$('#doughnut-canvas').attr('width', $('#doughnut-canvas').parent('.panel-body').width()).css('width',$('#doughnut-canvas').parent('.panel-body').width()+'px');
			myDoughnut = new Chart(document.getElementById("doughnut-canvas").getContext("2d")).Doughnut(doughnutData,doughnutOptions);
		});
	}
	
	if (document.getElementById('radar-canvas')) {
		var lebar = $('#radar-canvas').parent('.panel-body').width();
		$('#radar-canvas').attr('width', lebar);
		
		var radarOptions = {						
			//Boolean - If we show the scale above the chart data			
			scaleOverlay : false,			
			//Boolean - If we want to override with a hard coded scale
			scaleOverride : false,			
			//** Required if scaleOverride is true **
			//Number - The number of steps in a hard coded scale
			scaleSteps : null,
			//Number - The value jump in the hard coded scale
			scaleStepWidth : null,
			//Number - The centre starting value
			scaleStartValue : null,			
			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,
			//String - Colour of the scale line	
			scaleLineColor : "rgba(255,255,255,.3)",			
			//Number - Pixel width of the scale line	
			scaleLineWidth : 1,
			//Boolean - Whether to show labels on the scale	
			scaleShowLabels : false,			
			//Interpolated JS string - can access value
			scaleLabel : "<%=value%>",			
			//String - Scale label font declaration for the scale label
			scaleFontFamily : "'Arial'",			
			//Number - Scale label font size in pixels	
			scaleFontSize : 12,			
			//String - Scale label font weight style	
			scaleFontStyle : "normal",			
			//String - Scale label font colour	
			scaleFontColor : "rgba(255,255,255,0.8)",			
			//Boolean - Show a backdrop to the scale label
			scaleShowLabelBackdrop : true,			
			//String - The colour of the label backdrop	
			scaleBackdropColor : "rgba(255,255,255,0.75)",			
			//Number - The backdrop padding above & below the label in pixels
			scaleBackdropPaddingY : 2,			
			//Number - The backdrop padding to the side of the label in pixels	
			scaleBackdropPaddingX : 2,			
			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,			
			//String - Colour of the angle line
			angleLineColor : "rgba(255,255,255,0.4)",			
			//Number - Pixel width of the angle line
			angleLineWidth : 1,						
			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",			
			//String - Point label font weight
			pointLabelFontStyle : "normal",			
			//Number - Point label font size in pixels	
			pointLabelFontSize : 12,			
			//String - Point label font colour	
			pointLabelFontColor : "rgba(255,255,255,0.8)",			
			//Boolean - Whether to show a dot for each point
			pointDot : true,			
			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,			
			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,			
			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,			
			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,			
			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,			
			//Boolean - Whether to animate the chart
			animation : true,
			//Number - Number of animation steps
			animationSteps : 60,			
			//String - Animation easing effect
			animationEasing : "easeOutQuart",
			//Function - Fires when the animation is complete
			onAnimationComplete : null			
		}
		
		var radarChartData = {
			labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				}
			]
			
		}

		var myRadar = new Chart(document.getElementById("radar-canvas").getContext("2d")).Radar(radarChartData,radarOptions);
		$(window).resize(function() {
			$('#radar-canvas').attr('width', $('#radar-canvas').parent('.panel-body').width()).css('width',$('#radar-canvas').parent('.panel-body').width()+'px');
			myRadar = new Chart(document.getElementById("radar-canvas").getContext("2d")).Radar(radarChartData,radarOptions);
		});
	}
	
	if (document.getElementById('polar-canvas')) {
		var lebar = $('#polar-canvas').parent('.panel-body').width();
		$('#polar-canvas').attr('width', lebar);
		
		var polarOptions = {						
			//Boolean - Whether we show the scale above or below the chart segments
			scaleOverlay : true,			
			//Boolean - If we want to override with a hard coded scale
			scaleOverride : false,			
			//** Required if scaleOverride is true **
			//Number - The number of steps in a hard coded scale
			scaleSteps : null,
			//Number - The value jump in the hard coded scale
			scaleStepWidth : null,
			//Number - The centre starting value
			scaleStartValue : null,			
			//Boolean - Show line for each value in the scale
			scaleShowLine : true,			
			//String - The colour of the scale line
			scaleLineColor : "rgba(255,255,255,.2)",			
			//Number - The width of the line - in pixels
			scaleLineWidth : 1,			
			//Boolean - whether we should show text labels
			scaleShowLabels : true,			
			//Interpolated JS string - can access value
			scaleLabel : "<%=value%>",			
			//String - Scale label font declaration for the scale label
			scaleFontFamily : "'Arial'",			
			//Number - Scale label font size in pixels	
			scaleFontSize : 12,			
			//String - Scale label font weight style	
			scaleFontStyle : "normal",			
			//String - Scale label font colour	
			scaleFontColor : "#666",			
			//Boolean - Show a backdrop to the scale label
			scaleShowLabelBackdrop : true,			
			//String - The colour of the label backdrop	
			scaleBackdropColor : "rgba(255,255,255,0.75)",			
			//Number - The backdrop padding above & below the label in pixels
			scaleBackdropPaddingY : 2,			
			//Number - The backdrop padding to the side of the label in pixels	
			scaleBackdropPaddingX : 2,
			//Boolean - Stroke a line around each segment in the chart
			segmentShowStroke : true,			
			//String - The colour of the stroke on each segement.
			segmentStrokeColor : "rgba(255,255,255,0.2)",			
			//Number - The width of the stroke value in pixels	
			segmentStrokeWidth : 2,			
			//Boolean - Whether to animate the chart or not
			animation : true,			
			//Number - Amount of animation steps
			animationSteps : 100,			
			//String - Animation easing effect.
			animationEasing : "easeOutBounce",
			//Boolean - Whether to animate the rotation of the chart
			animateRotate : true,			
			//Boolean - Whether to animate scaling the chart from the centre
			animateScale : false,
			//Function - This will fire when the animation of the chart is complete.
			onAnimationComplete : null
		}
		
		var polarData = [{
				value : Math.random(),
				color: "rgba(166,184,122,0.80)"
			},{
				value : Math.random(),
				color: "rgba(39,174,96,0.80)"
			},{
				value : Math.random(),
				color: "rgba(231,76,60,0.80)"
			},{
				value : Math.random(),
				color: "rgba(230,126,34,0.80)"
			},{
				value : Math.random(),
				color: "rgba(79,112,196,0.80)"
			},{
				value : Math.random(),
				color: "rgba(35,48,60,0.80)"
		}];
		var myPolarArea = new Chart(document.getElementById("polar-canvas").getContext("2d")).PolarArea(polarData, polarOptions);
		$(window).resize(function() {
			$('#polar-canvas').attr('width', $('#polar-canvas').parent('.panel-body').width()).css('width',$('#polar-canvas').parent('.panel-body').width()+'px');
			myPolarArea = new Chart(document.getElementById("polar-canvas").getContext("2d")).PolarArea(polarData, polarOptions);
		});
	}
}

function mapSamples(){
	if (document.getElementById('map-wrapper1')) {
		var map = L.map('map-wrapper1').setView([-33.864857,151.086189], 12);

		L.tileLayer('http://{s}.tile.cloudmade.com/424f89d8aada4c5ab0b0a285839c37a0/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(map);


		L.marker([-33.864857,151.086189]).addTo(map).bindPopup("Some place on earth.");
		L.marker([-33.858442,151.114342]).addTo(map).bindPopup("Some place on earth.");
		
		/*map.fitBounds([
			[-33.864857,151.086189],
			[-33.858442,151.114342]
		]);*/
	}
	if (document.getElementById('check-in-map')) {
		var map1 = L.map('check-in-map').setView([-7.271546,112.757853], 14);

		L.tileLayer('http://{s}.tile.cloudmade.com/424f89d8aada4c5ab0b0a285839c37a0/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(map1);

		L.marker([-7.271546,112.757853]).addTo(map1).bindPopup("Some place on earth.");
	}
}