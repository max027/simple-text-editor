<?php
require_once $_SERVER["DOCUMENT_ROOT"]."/plugins/fonts.php";
class Settings {
  private $destination = "/settings/settings.json";
  private $raccept_value=array(
    "editor.fontWeight" => "/^(?:regular|bold|medium)$/",
    "editor.fontStyle" => "/^(?:normal|italic|oblique)$/",
    "editor.zoomEasing" => "/^(?:on|off)$/",
    "editor.statusBar" => "/^(?:on|off)$/",
    "editor.zoomValue" => "/^[\d\.]+$/",
    "editor.tabSize" => "/^[2-6]$/",
    "editor.fontSize" => "/^[\d\.]+$/",
    "editor.zoom" => "/^(?:on|off)$/",
    "editor.wordWrap" => "/^(?:on|off)$/",
    "editor.fileType" => "/^(?:on|off)$/",
    "editor.colorTheme" => "/^(?:dark|light|default)$/"
  );
  public $contentLength=22;
  public function __construct() {
    $this->raccept_value["editor.fontFamily"]=Fonts::getRegex();
    $source=$this->destination;
    $this->destination=$_SERVER["DOCUMENT_ROOT"].$source;
  }
  private function formatSettings($json_data) : string {
    $json_data = str_replace(",", ",\n\x20\x20", $json_data);
    $json_data = str_replace("\":", "\":\x20", $json_data);
    $json_data = str_replace(["{", "}"], ["{\n\x20\x20", "\n}"], $json_data);
    return $json_data;
  }
  public function get() {
    $settings=file_get_contents($this->destination);
    $settings=json_decode($settings, true);
    return $settings;
  }
  public function set(String $editor_setting, $value) {
    $settings = $this->get();
    if (!(isset($settings[$editor_setting]) && preg_match($this->raccept_value[$editor_setting], $value))) {
      $this->throwError("Unknown settings property!");
    }

    $final_value = intval($value)===0 ? $value : intval($value);
    $settings[$editor_setting]=$final_value;
    $json_data=json_encode($settings);
    $source=fopen($this->destination, "w+");
    $save_settings=fwrite($source, $this->formatSettings($json_data));
    fclose($source);
    return ["status"=> $save_settings ? "success" : "error"];
  }
  public function loadJSON() {
    return json_encode($this->get());
  }
  public function throwError($message) : void {
    die(json_encode(array("status"=> "error", "message"=> $message)));
  }
}
?>