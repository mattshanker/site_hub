 window.load( 

	function () {
		var coverLayer = document.getElementById('cd-cover-layer'),
			svgBg = document.getElementById('cd-svg-bg'),
			modal = document.getElementById('cd-modal'),
			content = document.getElementById('cd-modal-content'),
			modalTrigger = document.getElementById('modal-trigger');
			

		modalTrigger.addEventListener("click", toggleBtn, false);
		
		//animate the background
		

		//tell the a links and buttons what to do
		

		//add close functionality to every nav link
		
		//reveal close btn and link reverse open animation to it
			//modalTrigger.onclick = toggleBtn;
			function onButton (event){
				event.preventDefault();
				modal.addClass('.modal-is-visible'),
				content.addClass('.modal-is-visible'),
				coverLayer.addClass('.modal-is-visible'),
				console.log('toggle clicked!');
			}
			
			function offButton (event){
				event.preventDefault;
				modal.removeClass('.modal-is-visible');
			}


			function toggleBtn (event){
			if ( modal.classList.contains('modal-is-visible'))
				offButton();
			}
			{
				onButton();
		};

		//close modal window on click
	
			
		});

	


	
