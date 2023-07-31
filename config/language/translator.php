<?php
session_start();
$user_session = $_SESSION['user'];
$lang = $user_session["lang"];
$transtator = include $_SERVER["DOCUMENT_ROOT"].'/../config/language/lang.array.'.$lang.".php";
return $transtator;