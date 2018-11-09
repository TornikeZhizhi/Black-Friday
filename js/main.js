

var clock;
		
		$(document).ready(function() {
			var clock;

			clock = $('.clock').FlipClock({
		        clockFace: 'DailyCounter',
		        autoStart: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('The clock has stopped!')
		        	}
		        }
		    });
				    
		    clock.setTime(220880);
		    clock.setCountdown(true);
		    clock.start();

		});




$(document).ready(function(){


$(".flip-clock-label").eq(0).text("დღე");
$(".flip-clock-label").eq(1).text("საათი");
$(".flip-clock-label").eq(2).text("წუთი");
$(".flip-clock-label").eq(3).text("წამი");


})


//  Scroll Spy
$('.srcroll_line a').click(function(e) {
    var targetHref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetHref).offset().top
    }, 800);
    e.preventDefault();
  });



$(".top_nav a").click(function(e){

	e.preventDefault()
	$(".srcroll_line a").click()
});





$(".main_navigation a").on("click",function(e){
	e.preventDefault();

	$(".main_navigation a").removeClass("active");
	$(this).addClass("active");

})