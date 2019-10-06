function getData(n) {
	var arr = [],
		i,
		a,
		b,
		c,
		spike;
	for (i = 0; i < n; i = i + 1) {
		if (i % 100 === 0) {
			a = 2 * Math.random();
		}
		if (i % 1000 === 0) {
			b = 2 * Math.random();
		}
		if (i % 10000 === 0) {
			c = 2 * Math.random();
		}
		if (i % 50000 === 0) {
			spike = 10;
		} else {
			spike = 0;
		}
		arr.push([
			i,
			2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
		]);
	}
	return arr;
}
var n = 5000,
	data = getData(n);
console.time('line');

$(function () {                                                                     
$(document).ready(function() {                                                  

var chart;                                                                  
	$('#detaildata-1').highcharts({ 
	chart: {
		zoomType: 'x'
	},
	boost: {
		useGPUTranslations: true
	},
	title: {
		text: '振动信号' + n + '数据点'
	},
	subtitle: {
		text: 'Using the Boost module'
	},
	tooltip: {
		valueDecimals: 1
	},
	series: [{
		data: data,
		name:'频率/kHz',
		lineWidth: 0.5
	}],
	credits: {
		enabled: false
	}
});
	});                                                                             
});
console.timeEnd('line');// JavaScript Document