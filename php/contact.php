<?php

require_once('../libs/PHPMailer/PHPMailerAutoload.php');

$mail = new PHPMailer();
$mail -> isSMPT();
$mail -> SMPTAuth = true;
$mail -> SMTPSecure = 'ssl';
$mail -> Host = 'smpt.gmail.com';
$mail -> Port = '465';
$mail -> isHTML();
$mail -> Username = 'bmteasdale.dev@gmail.com';
$mail -> Password = 'ickeTche';
$mail -> SetFrom('no-reply@rsvpweb.com');
$mail -> Subject = 'Test';
$mail -> Body = 'A test E-Mail';
$mail -> AddAddress('bmteasdale3@gmail.com');

$mail -> Send();
?>