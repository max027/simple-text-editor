<?php
header("Content-Type: application/json");
require_once $_SERVER["DOCUMENT_ROOT"]."/plugins/settings.php";
require_once $_SERVER["DOCUMENT_ROOT"]."/plugins/fonts.php";

$capture_setting_request=array("request-2"=> true);

$Fonts = new Fonts();
$Settings = new Settings();
$requestCount=0;

$matcher=null;
$rflipableSetting="/(?:italic|oblique)/";
$accept_fonts = $Fonts->get();
$accept_settings = $Settings->get();

$request = array();
foreach($_POST as $s_request=>$data) {
  $explode=explode("_", $s_request);
  $keyword=join(".", $explode);
  $request[$keyword]=$data;
  $requestCount++;
  $capture_setting_request["request-{$requestCount}"]=$keyword;
}

// Handle for settings
if (isset($accept_settings[$capture_setting_request["request-1"]]) ||
  (isset($accept_settings[$capture_setting_request["request-2"]]))) {
  $export=null;

  if (isset($request["editor.fontWeight"]) &&
    preg_match($rflipableSetting, $request["editor.fontWeight"], $matcher)) {
    $request["editor.fontWeight"]=$request["editor.fontStyle"];
    $request["editor.fontStyle"]=array_shift($matcher);
  }

  if (isset($request["editor.fontWeight"]) &&
    $request["editor.fontWeight"]==="normal") {
    $request["editor.fontWeight"]="regular";
  }

  foreach($request as $settings_property=>$settings_value) {
    $export=$Settings->set($settings_property, $settings_value);
  }
  die(json_encode($export));
}
?>