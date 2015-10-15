
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
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		tog1 = document.getElementById( 'menutog1' ),
		tog2 = document.getElementById( 'menutog2' ),
		tog3 = document.getElementById( 'menutog3' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'stmenuopen' );
			classie.remove(tog1, 'opentog1' );
			classie.remove(tog2, 'opentog2' );
			classie.remove(tog3, 'opentog3' );
		}
		else {
			classie.add( bodyEl, 'stmenuopen' );
			classie.add( tog1, 'opentog1' );
			classie.add( tog2, 'opentog2' );
			classie.add( tog3, 'opentog3' );
		}
		isOpen = !isOpen;
	}

	init();

})();