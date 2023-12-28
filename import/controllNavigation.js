import settings from "./settings";

export default function controlNavigation() {
  $(window).on("contextmenu", function(e) {
    e.preventDefault();
  });
  
  const fileType = $("body").attr("data-file-type");
  const statusBar = settings.editorSetup["editor.statusBar"];
  const wordWrap = settings.cssSetup["editor.wordWrap"];
  statusBar=='on' && ($('.set-status-bar').find('input')[0].checked=true);
  wordWrap=='on' && ($('.set-word-wrap').find('input')[0].checked=true);
  $(".extension").text(fileType);

  console.log("%cNotebook", "color:#7287fd;", "Generic text editor read/write file.");
  console.log("%cWarning", "color:#0cbd0c;", "Dont't click on window when loading");
  console.log("%cLanguages", "color:#7287fd;", "Javascript, PHP, CSS, JSON.");
  console.log("%cAuthors", "color:#0cbd0c;", "Expert Modassir <codingmodassir@gmailcom>");

  $(document).click(function(e) {
    var activeElem;
    var deep = $(e.target).parents(".secondry-toggle").length;
    var iszoomBox = $(e.target).is(".secondry-toggle");

    if ($(e.target).hasClass("btoggle")) {
      activeElem=e.target;
    } 

    if (!$(e.target).hasClass("__notebook-option")) {
      $(".btoggle").each(function(_i, elem) {
        activeElem !== elem && !(iszoomBox || deep) && (elem.checked=false);
      });
    }
  });
}