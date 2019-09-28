function getData(n) {
	var arr = [],
		i,a
	for (i = 0; i < n; i = i + 1) {
		if (i <= 50 && i>=0) {
			a = Math.random()/10+0.80;
		}
		else if (i <= 100 && i>50) {
			a = Math.random()/10+0.60;
		}
		else if (i <= 150 && i>100) {
			a = Math.random()/10+0.40;
		}
		else if (i <= 200 && i>150) {
			a = Math.random()/10+0.20;
		} else {
			a = 0;
		}
		arr.push([i,a]);
	}
	return arr;
}
var n = 200,
	healthdata = getData(n);
console.time('line');

$(function () {                                                                     
$(document).ready(function() {                                                  

var chart;                                                                  
	$('#health-cv').highcharts({ 
	chart: {
		zoomType: 'x'
	},
	boost: {
		useGPUTranslations: true
	},
	title: {
		text: '健康度CV图'
	},
	subtitle: {
		text: 'Using the Boost module'
	},
	tooltip: {
		valueDecimals: 3
	},
	series: [{
		data: healthdata,
		name:'健康度',
		lineWidth: 0.8
	}],
	credits: {
		enabled: false
	}
});
	});                                                                             
});
console.timeEnd('line');// JavaScript Document