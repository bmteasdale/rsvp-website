<?php

// PHP Driver
$mongo = new MongoDB\Client(
    'mongodb+srv://RSVPAdmin:admin@rsvp-form-data-e9b0b.mongodb.net/test?retryWrites=true&w=majority');


    
$db = $mongo->test;
?>