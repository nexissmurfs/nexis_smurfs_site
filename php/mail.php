<?php
  if(isset( $_POST['name']))
  $name = $_POST['name'];
  if(isset( $_POST['email']))
  $email = $_POST['email'];
  if(isset( $_POST['message']))
  $message = $_POST['message'];

  $content="From: $name \n Email: $email \n Message: $message";
  $recipient = "nexissmurfs@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, "Contact NexisSmurfs.cf",$content, $mailheader) or die("Error!");
  echo "Email sent!";
  sleep(3);
  $url='/index.html';
  echo '<META HTTP-EQUIV=REFRESH CONTENT="1; '.$url.'">';
?>