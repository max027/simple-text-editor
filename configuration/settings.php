<?php
define("DOMAIN", "{$_SERVER["REQUEST_SCHEME"]}://{$_SERVER["HTTP_HOST"]}");
require_once $_SERVER["DOCUMENT_ROOT"]."/plugins/fonts.php";
require_once $_SERVER["DOCUMENT_ROOT"]."/plugins/settings.php";
$Settings = new Settings();
$Fonts = new Fonts();
$rootDir = str_replace("/", "\\", $_SERVER["DOCUMENT_ROOT"]);
?>