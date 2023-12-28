import saveAskPopup from "../templates/save-ask";
import textBackups from "./textBackups";
import render from "../import/render";

function removeWithFadePopup() {
  $(".forced-alert").addClass("close");
  var timeout = window.setTimeout(function() {
    $(".forced-alert").remove();
    window.clearTimeout(timeout);
  }, 300);
}

function alertSaveChanges() {
  !("text" in textBackups) && (textBackups.text="");

  $(window).on("beforeunload", function(e) {
    var curText = $(".line").text();
    if (textBackups.text!==curText) {
      e.preventDefault();
      e.returnValue='';
      if (!$(".save-ask").length) {
        var filename = $("body").attr("data-file-opened");
        filename += "."+ $("body").attr("data-file-type");
        render.rendWithArgs(saveAskPopup, filename);
        $(".force-save").click(function() {
          removeWithFadePopup();
          $(".s-save").click();
        });
        $(".exit-alert").click(removeWithFadePopup);
      }

      return "Are you sure you want to leave this page?";
    }
  });
}

export default alertSaveChanges;