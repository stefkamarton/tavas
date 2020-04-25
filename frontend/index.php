<?php
function getUrl() {
        $url = explode("?", $_SERVER['REQUEST_URI']);
        return $url[0];
}

$url=getUrl();
$url=explode("/",$url);

switch($url[1]){
	case "":
		require_once("main.php");
		break;
	case "feltoltes":
		require_once("feltoltes.php");
		break;
	default:
		die("404 - Page Not Found");
}




?>