
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
	function init() {

	var bodyEl = document.body,
		
		isOpen = false;				
		
	//function for fading content in and out onclick
	//update sidebar icons for each section
	//highlight sidebar icon when section is in view (waypoints)

	$(window).load(function(){
	//declare each nav button as a var
		var h = document.getElementById('btnHome'),
			a = document.getElementById('btnAbout'),
			s = document.getElementById('btnServices'),
			w = document.getElementById('btnWork'),
			c = document.getElementById('btnContact');
	
		
	
		var	inview = new Waypoint.Inview({
				element: document.getElementById('about'),
				enter: function(){
					$(h).toggleClass('active');
					$(a).toggleClass('active');
				}
			})

		var	wp = new Waypoint.Inview({
				element: document.getElementById('services'),
				enter: function(){
					$(a).toggleClass('active');
					$(s).toggleClass('active');
				}			
			})

	//declare each section of content as a var and hidden onLoad
	$(s).click(function(e){
		e.preventDefault();
		s.addClass('active'),
		scrollTo(s);
		$(h).removeClass('active');
	});	
	

}
)

}
init();


