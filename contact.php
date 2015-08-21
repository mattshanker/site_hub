<!DOCTYPE html>
<html xmlns:fb="http://www.facebook.com/2008/fbml" xml:lang="en" lang="en">
<head>
<title>HTML5/CSS Ajax Contact Form with jQuery</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<link href="css/styles.css" rel="stylesheet" type="text/css" />
</head>

<body>

  <div id="underconstruction">
    <i class="fa fa-exclamation-triangle"></i>This website is still under construction (but not for long!) If you stumble across it please send all questions, comments, hate mail, etc. to <a href="mailto:willitlaunch@mattshanker.com">willitlaunch@mattshanker.com</a><i class="fa fa-exclamation-triangle"></i>
  </div>

<div class="navbar" id="navigation">
  <ul>
    <li><a id="nHome" href="index.html">Home</a></li>
    <li><a id="nAbout" href="about.html">About Me</a></li>
    <li><a id="nWork" href="work.html">Work</a></li>
    <li><a id="nContact" href="contact.html">Contact</a></li>
  </ul>
</div>

    <!-- @begin contact -->
	<div id="contact" class="section">
		<div class="container content">


				<div class="desc">
					<h2>Contact Us</h2>

					<p class="desc">Please use the contact form below to send us any information we may need. It is required you place an e-mail, although if you do not need us to respond feel free to input noreply@yoursite.com.</p>
				</div>

				<div id="contact-form">

					<form id="contact-us" action="contact.php" method="post">
						<div class="formblock">
							<label class="screen-reader-text">Name</label>
							<input type="text" name="contactName" id="contactName" value="" class="txt requiredField" placeholder="Name:" />
													</div>

						<div class="formblock">
							<label class="screen-reader-text">Email</label>
							<input type="text" name="email" id="email" value="" class="txt requiredField email" placeholder="Email:" />
													</div>

						<div class="formblock">
							<label class="screen-reader-text">Message</label>
							 <textarea name="comments" id="commentsText" class="txtarea requiredField" placeholder="Message:"></textarea>
													</div>

							<button name="submit" type="submit" class="subbutton">Send us Mail!</button>
							<input type="hidden" name="submitted" id="submitted" value="true" />
					</form>
				</div>

					</div>
    </div><!-- End #contact -->

<script type="text/javascript">
	<!--//--><![CDATA[//><!--
	$(document).ready(function() {
		$('form#contact-us').submit(function() {
			$('form#contact-us .error').remove();
			var hasError = false;
			$('.requiredField').each(function() {
				if($.trim($(this).val()) == '') {
					var labelText = $(this).prev('label').text();
					$(this).parent().append('<span class="error">Your forgot to enter your '+labelText+'.</span>');
					$(this).addClass('inputError');
					hasError = true;
				} else if($(this).hasClass('email')) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if(!emailReg.test($.trim($(this).val()))) {
						var labelText = $(this).prev('label').text();
						$(this).parent().append('<span class="error">Sorry! You\'ve entered an invalid '+labelText+'.</span>');
						$(this).addClass('inputError');
						hasError = true;
					}
				}
			});
			if(!hasError) {
				var formInput = $(this).serialize();
				$.post($(this).attr('action'),formInput, function(data){
					$('form#contact-us').slideUp("fast", function() {
						$(this).before('<p class="tick"><strong>Thanks!</strong> Your email has been delivered. Huzzah!</p>');
					});
				});
			}

			return false;
		});
	});
	//-->!]]>
</script>

</body>
</html>
