$(function () {                                                                     
$(document).ready(function() {                                                  
	
		var chart;                                                                  
	$('#banner-warnnum').highcharts({                                                
		chart: {                                                                
			type: 'line',                                                     
			animation: Highcharts.svg, // don't animate in old IE               
			marginRight: 10,                                                    
			events: {                                                           
				load: function() {                                              
																				
					// set up the updating of the chart each second             
					var series = this.series[0];                                
					setInterval(function() {                                    
						var x = (new Date()).getTime(), // current time         
							y = Math.floor(Math.random()*10);                                  
						series.addPoint([x, y], true, true);                    
					}, 1000);                                                   
				}                                                               
			}                                                                   
		},                                                                      
		title: {                                                                
			text: '警报次数走势图--1秒'                                            
		},                                                                      
		xAxis: {                                                                
			type: 'datetime',                                                   
			tickPixelInterval: 100                                              
		},                                                                      
		yAxis: {                                                                
			title: {                                                            
				text: '警报次数--1秒'                                                   
			},                                                                  
			plotLines: [{                                                       
				value: 0,                                                       
				width: 1,                                                       
				color: '#808080'                                                
			}]                                                                  
		},                                                                      
		tooltip: {                                                              
			formatter: function() {                                             
					return '<b>'+ this.series.name +'</b><br/>'+                
					Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
					Highcharts.numberFormat(this.y, 2);                         
			}                                                                   
		},                                                                      
		legend: {                                                               
			enabled: false                                                      
		},                                                                      
		exporting: {                                                            
			enabled: false                                                      
		},
		series: [{                                                              
			name: 'Random data',                                                
			data: (function() {                                                 
				// generate an array of random data                             
				var data = [],                                                  
					time = (new Date()).getTime(),                              
					i;                                                          
																				
				for (i = -19; i <= 0; i++) {                                    
					data.push({                                                 
						x: time + i * 1000,                                     
						y: Math.floor(Math.random()*10)                                       
					});                                                         
				}                                                               
				return data;                                                    
			})()                                                                
		}],
		credits: {
		enabled: false
		}
	});                                                                         
});                                                                             
																				
});// JavaScript Document