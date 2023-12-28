<?php
header("Content-Type: application/json");
$dest = "{$_SERVER["DOCUMENT_ROOT"]}/tmp/";

require '../plugins/saveContent.php';
$saveContent=new SaveContent();

if (!isset($_POST["content"])) {
  die();
}

$message = json_encode(["status"=>"success"]);

$content = html_entity_decode($_POST["content"]);

if (isset($_POST["skip"]) && $_POST["skip"]==true) {
  $isSaved=$saveContent->save($dest, $content);
  $isSaved && die($message);
}
if (isset($_POST["file-name"]) && isset($_POST["xhr-file-type"])) {
  if (file_exists($dest.$_POST["file-name"])) {
    die(json_encode([
      "exists"=> true,
      "status"=> "error",
      "message"=> "Can't saved File '{$_POST["file-name"]}' already exists."
    ]));
  }
  $isSavedAs=$saveContent->saveAs($_POST["file-name"], $content, $dest);
  $isSavedAs && die($message);
}
?>