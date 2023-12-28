<?php
ini_set("error_reporting", 1);
header("Content-Type:text/plain");
class pageInfo {
  private $destination;
  private $getAllFile;
  private $info;
  public function __construct() {
    $this->destination=$_SERVER["DOCUMENT_ROOT"]."/tmp/";
    $this->info=[];
    $this->getAllFile=glob($this->destination.'*');
  }
  public function appendFile($blobFile) {
    if (!isset($blobFile['name']) || !isset($blobFile['tmp_name'])) {
      return [];
    }
    $tmp_name = $blobFile['tmp_name'];
    $filename = $blobFile['name'];
    if ($blobFile['error'] > 0) {
      return [];
    }
    $this->emptyDir();
    $this->getAllFile=array($this->destination.$filename);
    if (move_uploaded_file($tmp_name, $this->destination.$filename)) {
      return $this->getInfo();
    }
    return [];
  }
  public function emptyDir() : void {
    $this->clearCache(glob($this->destination.'*'), true);
  }
  public function insertContent($data) {
    
  }
  public function getInfo() {
    $files=$this->getAllFile;
    count($files) > 1 && $this->clearCache($files);
    $self_destination=end($files);
    $info = pathinfo($self_destination);
    if (!isset($info['extension'])) {
      return $this->info;
    }
    $this->info['filename']=$info['filename'];
    $this->info['extension']=$info['extension'];
    $this->info['content']=$this->getContent($self_destination);
    if (count($this->info['content']) > 12000) {
      $this->emptyDir();
      return [];
    }
    return $this->info;
  }
  private function getContent($destination) {
    if (!file_exists($destination)) {
      return;
    }
    $content = file($destination);
    return $content;
  }
  private function clearCache($destinations,$all=false) {
    !$all && array_pop($destinations);
    foreach($destinations as $i=>$destination) {
      if (file_exists($destination)) {
        unlink($destination);
      }
    }
  }
}

if (isset($_POST["request"])) {
  $pageInfo = new pageInfo();
  $export = $pageInfo->getInfo();
  
  if ($_POST['request']==='POST') {
    $export = $pageInfo->appendFile($_FILES['file']);
  }

  if (!isset($export['content'])) {
    die(json_encode([]));
  }
  
  $json_export = json_encode($export);

  if (!$json_export) {
    array_unshift($export["content"], $export["filename"]);
    array_unshift($export["content"], $export["extension"]);
    $export["content"]=join("\n", $export["content"]);
    die($export["content"]);
  }
  
  die($json_export);
}
?>