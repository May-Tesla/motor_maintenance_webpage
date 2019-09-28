$(function () {                                                                     
$(document).ready(function() {                                                  

	var chart;                                                                  
	$('#detaildata-zhuansu').highcharts({                                                
		chart: {                                                                
			type: 'line',                                                     
			animation: Highcharts.svg, // don't animate in old IE               
			marginRight: 120,
			zoomType: 'x',
		},
		title: {
				text: '转速数据'
		},
		subtitle: {
				text: '数据来源：电机'
		},
		xAxis: [{
            crosshair: true,
            type: 'datetime',
			tickPixelInterval: 1,
            title: {
                text: '时间'
            },
			labels: {
				formatter: function () {
					var time = (new Date()).getTime();
					return Highcharts.dateFormat('%H:%M:%S',this.value);//注意，此处有未解决事项
				},
				rotation:30,//倾斜30度，防止数量过多显示不全
			},
		}],
		yAxis: [{
				title: {
						text: '转速（r/min）'
				},
			labels: {
                        format: '{value}',//格式化Y轴刻度
                        style: {
                            color: '#89A54E'
                        }
					}
				},
				{ // Secondary yAxis
                    title: {
                        text: '转矩（N*m）',
                        },
				labels: {
                        format: '{value}',//格式化Y轴刻度
                        style: {
                            color: '#89A54E'
                        }
		},
                    opposite: true
                }],
		legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle'
		},
		tooltip: {
                    shared: true, //公用一个提示框
                    formatter: function() {
                        return this.x +"<br>"
                           + "<span style='color:#4572A7'>转速：" + this.points[0].y +" r/min</span><br>" 
                           + "<span style='color:#89A54E'>转矩：" + this.points[1].y +" N*m</span>"
                        ;
                    },
                },
		plotOptions: {
				series: {
						label: {
								connectorAllowed: false
						},
				}
		},
		series: [
			{name: '转速',
			 yAxis:0,
			 data: [43.934, 52.503, 57.177, 69.658, 97.031, 11.9931, 13.7133, 15.4175]},
			{name: '转矩',
			 yAxis:1,
				  data: [24.916, 24.064, 29.742, 29.851, 32.490, 30.282, 38.121, 40.434]},
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