<?php
class Fonts {
  private static string $destination;
  public function __construct() {
    self::$destination=$_SERVER["DOCUMENT_ROOT"]."/Fonts/fonts.json";
  }
  static function get() {
    $Fonts = new static;
    $data=file_get_contents($Fonts::$destination);
    $data=json_decode($data, true);
    return $data;
  }
  static function loadJSON() {
    return json_encode(self::get());
  }
  static function getRegex() {
    $font_regex=array();
    foreach(self::get() as $font_name=>$font_value) {
      $font_regex[]=$font_name;
    }
    $font_regex = "/^(?:".join("|", $font_regex).")$/";
    return $font_regex;
  }
}
?>