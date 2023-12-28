<?php
class SaveContent {
  private $file_source = null;
  public function save($dest, $content, $ndest=false) {
    $cur_dest=$ndest ? $ndest : $this->loc($dest);
    $source=fopen($cur_dest, "w+");
    fwrite($source, $content);
    fclose($source);
    return true;
  }
  public function saveAs($filename, $content, $dest) {
    $new_dest="{$dest}{$filename}";
    $cur_dest=$this->loc($dest);
    !file_exists($new_dest) && touch($new_dest, time());

    $this->save($dest, $content, $new_dest);
    file_exists($cur_dest) && unlink($cur_dest);
    return true;
  }
  private function loc($destination) {
    $glob=glob($destination ."*");
    return end($glob);
  }
}
?>