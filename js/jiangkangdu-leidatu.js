$(function () {                                                                     
$(document).ready(function() {                                                  

var chart;                                                                  
	$('#jiangkangdu-leidatu').highcharts({
		chart: {
				polar: true,
				type: 'line'
		},
		title: {
				text: '健康指数',
				x: -80
		},
		pane: {
				size: '60%'
		},
		xAxis: {
				categories: ['气隙偏心', '轴承故障', '转子断条', '匝间短路',
										 '~', '~'],
				tickmarkPlacement: 'on',
				lineWidth: 0
		},
		yAxis: {
				gridLineInterpolation: 'polygon',
				lineWidth: 0,
				min: 0
		},
		tooltip: {
				shared: true,
				pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
		},
		legend: {
				align: 'right',
				verticalAlign: 'top',
				y: 70,
				layout: 'vertical'
		},
		series: [{
				name: '~',
				data: [0.43,0.79, 0.60, 0.35, 0.77, 0.10],
				pointPlacement: 'on'
		}, {
				name: '~',
				data: [0.50, 0.99, 0.42, 0.31, 0.26, 0.14],
				pointPlacement: 'on'
		}],
		credits: {
		enabled: false
	}
});
	});                                                                             
																				
});// JavaScript Document