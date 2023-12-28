import { hidePopupWithEase } from "../exports/multiTaskHandler";
import textBackups from "../exports/textBackups";
import render from "../import/render";
import xhrSend from "../server/xhrSend";
import saveAsPopup from "../templates/save-as";
import fileBackup from "../import/fileBackup";
import existsErrorPopup from "../templates/existErrorPopup";

function createData() {
  var datasource = {};
  var data = window.localStorage.getItem("statusInfo");
  data = data && JSON.parse(data) || {};
  datasource["charset"]=data.charset || "UTF-8";
  datasource["fileExists"]=$("body").attr("data-file-exists");
  datasource["fileName"]=$("body").attr("data-file-opened");
  datasource["fileType"]=$("body").attr("data-file-type");
  datasource["fileExists"]=JSON.parse(datasource["fileExists"]);
  return datasource;
}
export default function save() {
  $(".s-save").click(openSaveAsPopup);
}
function openSaveAsPopup() {
  if ($(".save-as-popup").length) {
    return;
  }
  const datasource = createData();
  if (datasource["fileExists"]) {
    saveFileContent({skip: true, content: extractHTML()});
    return;
  }
  render(saveAsPopup).runScript(selectAndFocusInput);
}
function saveFileContent(senderData) {
  if (senderData.content===fileBackup.backups && senderData.skip) {
    return;
  }
  if (!fileBackup.backups ||
    (fileBackup.backups && fileBackup.backups!==senderData.content)) {
    fileBackup.backups=senderData.content;
  }
  xhrSend(senderData, resetup);
}
function submitSaveAs() {
  $("#saveAsForm").on("submit", function(e) {
    e.preventDefault();
    saveFileContent(serializeFormData(this));
  });
}
function selectAndFocusInput() {
  var input = $("#filename")[0];
  input.select();
  submitSaveAs();
  setRecentFileList();
  toggleHandler();
  $(input).focus();
}
function saveRecentFileInLocalDB(filename) {
  var data = window.localStorage.getItem("recent");
  try {
    data = data && JSON.parse(data);
  } catch(e) {};
  if (!data) {
    data = {dir: `${$("body").attr("data-root-dir")}\\tmp\\`, recent: []};
  }
  
  $.extend(true, data, {recent: [filename]});
  data.recent = $.unique(data.recent);

  window.localStorage.setItem("recent", JSON.stringify(data));
  return data;
}
function setRecentFileList() {
  var data = window.localStorage.getItem("recent");
  try {
    data = data && JSON.parse(data);
  }
  catch(e) {};

  $(".recentfile .rtoggle").empty();
  var recentElem, value;

  if (!data) {
    data = {dir: `${$("body").attr("data-root-dir")}\\tmp\\`, recent: ["Untitled.txt"]};
  }

  $.each(data.recent.reverse(), function(_i, recentFile) {
    recentElem = document.createElement("div");
    value = data.dir + recentFile;
    $(recentElem).attr("data-id", "#filename");
    $(recentElem).attr("data-path", value).attr("data-value", recentFile);
    $(recentElem).html(value);
    $(recentElem).addClass("eqiv-recent-file");
    $(".recentfile .rtoggle").append(recentElem);
  });
}
function toggleHandler() {
  $(".eqiv-recent-file, .ftype").click(function() {
    if ($(this).filter("#ftype")) {
      $("#XFT").val($(this).attr("data-sender"));
    }
    var id = $(this).attr("data-id");
    var value = $(this).attr("data-value");
    $("#chooseType")[0].checked=false;
    $("#recentToggle")[0].checked=false;
    var focusable = $(id).val(value).filter("#filename");
    focusable.length && focusable[0].select();
    focusable.focus();
  });
}
function resetup(response, status, sender) {
  $(".save-as-popup").remove();
  if (response.exists) {
    render.rendWithArgs(existsErrorPopup, sender["file-name"]);
    $(".btn-ok").click(function() {
      hidePopupWithEase($(".error-popup"));
    });
    return;
  }
  if (response.status===status) {
    textBackups.text = $(".line").text();
    if (sender.skip) return;
    
    var filename = sender["file-name"].split(".");
    var extension = filename.pop();
    filename = filename.join(".");
    document.title = `Notebook – ${filename}`;
    $(".extension").text(extension);
    saveRecentFileInLocalDB(sender["file-name"]);
    $("body")
      .attr("data-file-type", extension).attr("data-file-exists", true) .attr("data-file-opened", filename);
  }
}
function extractHTML() {
  var extracted="";
  $.each($(".line"), function(_i, line) {
    extracted += $(line).text().replace(/\s/g, "\x20") + "\n";
  });
  
  extracted = extracted.replace(/^\n/, "").replace(/\n$/, "");
  return extracted.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function serializeFormData(form) {
  /**
   * text-data
   * method
   * data-file-exists
   * data-file-content
   * data-file-type
   * data-file-opened
   */
  var rnoAcceptFilename = /[\\\/\:\*\?\<\>\"\|]/g;
  var rExtension = /\.[a-z0-9]{1,10}$/;
  var data = JSON.parse($(form).serializeJson());
  data.content = extractHTML();

  if (data['xhr-file-type']==='txt') {
    var filename = data['file-name'];
    data['file-name'] = filename.replace(/\.txt$/, '').concat('.txt');
  }

  if (!rExtension.test(data['file-name'])) {
    data['file-name']=data['file-name'].concat('.txt');
  }

  if (rnoAcceptFilename.test(data["file-name"])) {
    return;
  }
  return data;
}
export { createData, selectAndFocusInput };