
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

  var mo = document.getElementById("modal"),
			co = document.getElementById("modal-content"),
			c = document.getElementById('clsbtn'),
			h = document.getElementById('header'),
			tl = new TimelineMax(),
			mot = document.getElementById('motrig'),
			dev = document.getElementById('modalt1'),
			inb = document.getElementById('modalt2'),
			ser = document.getElementById('services'),
			devs = document.getElementById('devel'),
			inbs = document.getElementById('inbound'),
			wo = document.getElementById('btnWork'),
			se = document.getElementById('btnServices'),
			con = document.getElementById('btnContact'),
			wos = document.getElementById('work'),
			sco = document.getElementById('scone'),
			sct = document.getElementById('sctwo'),
			devp = sco.getElementsByTagName('p'),
			inbp = sct.getElementsByTagName('p'),
			h = document.getElementById('htitle');

function clmo () {
		tl.to([mo, co, h, mot], 0.5, {css: {className:"-=modal-is-visible"}});
	}

function wid () {
		var cssw = window.innerWidth;

			h.innerHTML = cssw;
	}

	document.addEventListener("DOMContentLoaded", function () {
		tl.to(ser, 0.3, {css: {display: "none"}});
		console.log('services hidden');
	}, false);

	se.onclick = function (e) {
  e.preventDefault();
		tl.to(ser, 0.3, {css:{display:"block"}});
		console.log('services!');
	};


	//se.addEventListener('click', showSer, false);

	mot.addEventListener('click', showModal, false);

		function showModal (e) {
		e.preventDefault();
			tl.to([mo, h, mot, co], 0.5, {css: {className:"+=modal-is-visible"}, ease:Bounce.easeOut});
			// tl.to(co, 0.5, {visibility:'visible', top: '0', ease:Bounce.easeOut});
				console.log('modal toggled');
	}

	c.onclick = function (e) {
 		e.preventDefault();
 		clmo();
			console.log('modal closed');
 	};

 	dev.onclick = function (e) {

 		e.preventDefault();
 			tl.to([inbp, inbs, wos], 0.3, {css: {display: "none"}});
 			tl.to([devs, devp], 0.5, {css: {display: "block", top:"-100"}, ease:Power1.easeOut});
 		h.innerHTML = 'web dev';

 	};

 	inb.onclick = function (e) {
 		e.preventDefault();
 			tl.to([devp, devs, wos], 0.5, {css: {display: "none", top: "100"}});
 			tl.to([inbs, inbp], 0.5, {css: {display: "block", top: "-100"}, ease:Power1.easeOut});
 		h.innerHTML = 'inbound mktg';
 	};

 	wo.onclick = function (e) {
 		e.preventDefault();
 			tl.to([devp, inbp, devs, inbs], 0.3, {css:{display:"none", top: "100"}});
 			tl.to(wos, 0.3, {css:{display:"block", top: "-100"}});
 		h.innerHTML = 'work';
 	};


 	wid();
 	console.log('functional function!');
