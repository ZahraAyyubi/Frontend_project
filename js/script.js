$(document).ready(function(e) {
		change_topMenu();
		change_position_of_header();
		wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:     150
		}
	);
		wow.init();

		$(window).resize(function(e) {
				sizeOfPage=$(this).innerWidth();
				
			change_position_of_header();
			if(sizeOfPage <=768){
				$("#top_logo img").attr("src","images/logo-1.png");
			}else{
				$("#top_logo img").attr("src","images/logo_white.png");
			}
    });
		function change_position_of_header(){
			if($(this).innerWidth()<=989){
				$("header").css("position","static");
			}else{
				$("header").css("position","fixed");
			}
      
		}
		$("a").on('click', function(event) {
			
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-90
      }, 800,"easeInOutExpo", function(){
      });
		}
  	});
		function change_topMenu(){
		 if($("#top-of-page header").offset().top > 20){
			 $("#top-of-page header").addClass("topMenu-animate");
			 $("#top_logo img").attr("src","images/logo-1.png");
			 $("#topMenu li").eq(0).addClass("active");
			 }
			 else
			 {
				 $("#top-of-page header").removeClass("topMenu-animate");
				 if($(window).innerWidth() <=768){
						$("#top_logo img").attr("src","images/logo-1.png");
					}else{
						$("#top_logo img").attr("src","images/logo_white.png");
					}
				 $("#topMenu li").eq(0).removeClass("active");
			 }
		 
		 if($("#topMenu").offset().top >=$("#top-of-page").height()-100){
			 $("#scroll-top").css("visibility","visible");
			 
		}
		else{
			$("#scroll-top").css("visibility","hidden");
			
		}
		}
    $(window).scroll(function(){
			if($(window).innerWidth()>989)
			change_topMenu();
		}
		)
		$(".custom-btn").each(function(index, element) {
      $(element).hover(function() {
  			
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
});
    });
		
		$('[data-toggle="popover"]').popover(
		
			{
    	content: $("form").clone(),
			}
		);
		show_nav=false;
    $(".nav-btn").click(function(e) {
			if(show_nav==false){
     	 $("#topMenu").show().animate({left: '40vw'},"slow");
			 if($(window).innerWidth()<=768){
				 $("#search-item span").css("color","#fff");
				 $(".icon-bar").css("background-color","#fff");
			 }
			 $(".icon-bar").eq(0).css("transform","translateY(3.5px) rotate(225deg)");
			 $(".icon-bar").eq(1).hide();
			 $(".icon-bar").eq(2).css("transform","translateY(-3.5px) rotate(-225deg)");
			 
				show_nav=true;
			}else{
				$("#topMenu").animate({left: '100vw'},"slow",function(){$(this).hide()});
				
				 $("#search-item span").css("color","#808080");
				 $(".icon-bar").css("background-color","#808080");
				 
				$(".icon-bar").eq(0).css("transform"," rotate(0deg) translateY(0px)");
			 
			 $(".icon-bar").eq(2).css("transform"," rotate(0deg) translateY(0px)");
			 $(".icon-bar").eq(1).show();
				show_nav=false;
				
			}
			
    });
  });
