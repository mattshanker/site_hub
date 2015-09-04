<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $url = $_POST['url'];
    $message = $_POST['message'];
    $from = 'contact@mattshanker.com';
    $to = 'matt@mattshanker.com';
    $subject = 'Do some work!';
    $human = $_POST['human'];

    $body = "From: $name\n Email: $email\n Message:\n $message\n URL:$url"
?>

<?php

if ($_POST['submit'] && $human == '7') {
  if (mail ($to, $subject, $body, $from)) {
    echo '<p>Your message has been sent!</p>';
  } else {
    echo '<p>Error! Please check your message and try again.</p>'
  }

} else if ($_POST['submit'] && $human != '7') {
    echo '<p>You answered the anti-spam question incorrectly!</p>';
}
?>
