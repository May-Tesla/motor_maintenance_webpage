$(function () {                                                                     
$(document).ready(function() {                                                  

	var chart;                                                                  
	$('#detaildata-dianliu').highcharts({                                                
		chart: {                                                                
			type: 'line',                                                     
			animation: Highcharts.svg, // don't animate in old IE               
			marginRight: 120,   
		},
		title: {
				text: '三相电流数据'
		},
		subtitle: {
				text: '数据来源：电机'
		},
		yAxis: {
				title: {
						text: '电流（A）'
				}
		},
		legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle'
		},
		plotOptions: {
				series: {
						label: {
								connectorAllowed: false
						},
						pointStart: 2010
				}
		},
		series: [
			     {name: '第一相',
				  data: [43.934, 52.503, 57.177, 69.658, 97.031, 11.9931, 13.7133, 15.4175]},
				 {name: '第二相',
				  data: [24.916, 24.064, 29.742, 29.851, 32.490, 30.282, 38.121, 40.434]}, 
				 {name: '第三相',
				  data: [11.744, 17.722, 16.005, 19.771, 20.185, 24.377, 32.147, 39.387]}
		        ],
		responsive: {
				rules: [{
						condition: {
								maxWidth: 500
						},
						chartOptions: {
								legend: {
										layout: 'horizontal',
										align: 'center',
										verticalAlign: 'bottom'
								}
						}
				}]
		},
		credits: {
     		enabled: false
					}
});

});                                                                             
																				
});// JavaScript Document