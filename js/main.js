
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
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		tog1 = document.getElementById( 'menutog1' ),
		tog2 = document.getElementById( 'menutog2' ),
		tog3 = document.getElementById( 'menutog3' ),
		isOpen = false;
		
		
		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		});
		
		openbtn.addEventListener( "click",   toggleMenu, false);
		
		function toggleMenu () {
			if (isOpen == false) {
			classie.add( bodyEl, 'stmenuopen' ),
			classie.add( tog1, 'opentog1' ),
			classie.add( tog2, 'opentog2' ),
			classie.add( tog3, 'opentog3' ),
			isOpen = true;			
		}

			else {
			classie.remove( bodyEl, 'stmenuopen' ),
			classie.remove(tog1, 'opentog1' ),
			classie.remove(tog2, 'opentog2' ),
			classie.remove(tog3, 'opentog3' ),
			isOpen = false;
		}		
	};
}

init();



