import { checkActiveDownload } from "./multiTaskHandler";
import SBLogic from "../import/SBLogic";
import textBackups from "./textBackups";

function resetActivity() {
  $(".line:first").empty().outerHeight(window.originalHeight).addClass("active");
  $(".download, .clear-win").addClass("disabled");
  $(".line:first, .counters span:first").nextAll().remove();
  $(".writable-area").focus();
  textBackups.text = "";
  document.title = "Notebook";
  SBLogic();
  $(".ln, .col").text(1);
  $(".extension").text("TXT");
  $(".counters span:first").css("opacity", 1);
  $("body")
    .attr("data-file-type", "txt").attr("data-file-exists", false) .removeAttr("data-file-opened");
}

export default function download() {
  $(".download").click(function() {
    $.ajax({
      url: '/models/817248fb77fb5c2cef3f2c732ad257cb1fb9c5e4',
      type: 'POST',
      data: {File: checkActiveDownload()},
      success: function(data) {
        var download = document.createElement("a");
        download.href=data;
        var finfo = JSON.parse($.jsonParam(window.decodeURIComponent(this.data)));
        download.download = finfo["File"]["File"] + "." + finfo["File"]["type"];
        resetActivity();
        download.click();
      }
    });
  });
  $(".clear-win").click(function() {
    $.ajax({
      url: '/models/817248fb77fb5c2cef3f2c732ad257cb1fb9c5e4',
      type: 'POST',
      data: {dispatch: checkActiveDownload()},
      success: resetActivity
    });
  });
}