<?php
if (isset($_POST["File"]) && isset($_POST["File"]["File"]) && isset($_POST["File"]["type"])) {
  $root_dir = "{$_SERVER["DOCUMENT_ROOT"]}/tmp/";
  $filename = "{$_POST["File"]["File"]}.{$_POST["File"]["type"]}";
  $file_path = "{$root_dir}{$filename}";

  if (file_exists($file_path)) {
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime_type = finfo_file($finfo, $file_path);
    finfo_close($finfo);

    $filedata = file_get_contents($file_path);
    $base64_encode = base64_encode($filedata);
    $final_data = "data:{$mime_type};base64,{$base64_encode}";
    unlink($file_path);
    die($final_data);
  }
}
if (isset($_POST["dispatch"]) && isset($_POST["dispatch"]["File"]) && isset($_POST["dispatch"]["type"])) {
  header("Content-Type: application/json");
  $root_dir = "{$_SERVER["DOCUMENT_ROOT"]}/tmp/";
  $filename = "{$_POST["dispatch"]["File"]}.{$_POST["dispatch"]["type"]}";
  $file_path = "{$root_dir}{$filename}";
  if (file_exists($file_path) && unlink($file_path)) {
    die(json_encode(["status"=> "success"]));
  }
}
?>