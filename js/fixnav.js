
        $(document).ready(function(){
                  var top = $('#nav').offset().top; 
                 $(document).scroll(function()
			{
                  //获取当前滚动栏scroll的高度并赋值
                  var scrTop = $(window).scrollTop();
                  //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
					 
                  if(scrTop >= top){ $('#nav').css({'position':'fixed','top':'0','width':'100%'}); }
					  
					 else{//否则清空悬浮
						  $('#nav').css({'position':'','top':''});}

           })
              })
			
				  
			
// JavaScript Document