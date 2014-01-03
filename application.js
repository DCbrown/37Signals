$(document).ready(function() {
        $('.one').mouseenter(function(){
                $('div.container').hide();
		});
		$('.one').mouseenter(function() {
				$('div.txtbase, .arrow-left').show();
		

		});
        $('.one').mouseleave(function(){
                $('div.container').show();
		});		
		$('.one').mouseleave(function(){
                $('div.txtbase').hide();
		});
		$('.one').mouseleave(function(){
                $('div.arrow-left, .arrow-left').hide();
						


		});


        $('.two').mouseenter(function(){
                $('div.container').hide();
		});
		$('.two').mouseenter(function() {
				$('div.txthigh, .arrow-mid').show();
		});
        
		$('.two').mouseleave(function(){
                $('div.container').show();
		
		});
		$('.two').mouseleave(function(){
                $('div.txthigh').hide();
		});
		$('.two').mouseleave(function(){
                $('div.arrow-mid, .arrow-mid').hide();
						
		});

		$('.three').mouseenter(function(){
                $('div.container').hide();
		});
		$('.three').mouseenter(function() {
				$('div.txtcamp, .arrow-right').show();
		
		});
        
		$('.three').mouseleave(function(){
                $('div.container').show();
		});
		$('.three').mouseleave(function(){
                $('div.txtcamp').hide();
		});
		$('.three').mouseleave(function(){
                $('div.arrow-right, .arrow-right').hide();
						
		});
});



$(document).ready(function() {

["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date()).getDay()]
});