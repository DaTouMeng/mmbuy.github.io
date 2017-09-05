$(function() {
	$.fn.toTop = function(options) {
		var defaults = {			
			showHeight:100,
			speed :100
		};
		var options = $.extend(defaults,options);
		$("body").prepend("<div id='totop'><a title='' href='http://www.97zzw.com' hidefocus='true'></a></div>");
		var $toTop = $(this);
		var $top = $("#totop");
		var $ta = $("#totop a");
		$toTop.scroll(function(){
			var scrolltop=$(this).scrollTop();		
			if(scrolltop>=options.showHeight){				
				$top.fadeIn();
			}
			else{
				$top.fadeOut();
			}
		});	
		$ta.hover(function(){ 		
			$(this).addClass("cur");	
		},function(){			
			$(this).removeClass("cur");		
		});	
		$top.click(function(){
			$("html,body").animate({scrollTop: 0},options.speed);
			return false;
		});
	}
});

