import contextStatusBar from "../exports/contextStatusBar";
import settings from "../import/settings";
import SBLogic from "../import/SBLogic";
import statusbar from "../import/statusbar";
import server from "../server/server";
import { cssSetupFn } from "../import/NBSinit";

function initializeSettings() {
  $("#statusBar").on("change", function() {
    server({"editor.statusBar": this.checked ? 'on' : 'off'});
  });
  settings.cssSetup["editor.wordWrap"]=='off' && $(".writable-area").attr("data-word-wrap", 'off');
  $(".set-status-bar").click(function() {
    var checkbox = $(this).find("input")[0];
    setSetting("editor.statusBar", checkbox.checked ? 'on' : 'off');
  });
}
function setSetting(property, value) {
  if (property in settings.editorSetup) {
    if (property==='editor.statusBar') {
      var statusInfo = {extension: $("body").attr("data-file-type")};
      var zoom = window.sessionStorage.getItem("zoom_value");
      zoom = zoom || JSON.stringify({zoom: 100});
      var statusBar = statusbar();
      value=='on' ? $('.editor-content').append(statusBar) : $('.status-bar').remove();
      
      $("span.zoom").text(JSON.parse(zoom).zoom + "%");
      $(".active-filetype").html(
        `<span class="extension">${statusInfo.extension}</span>`
      );
      SBLogic();
      contextStatusBar();
    }
  } else {
    $(".writable-area").removeClass("active");
    $("body").css(cssSetupFn(property, value, settings.fontSetup));
    $(".writable-area").attr("data-"+$.dashed(property.slice(7)), value);
  }
}
export { setSetting };
export default initializeSettings;