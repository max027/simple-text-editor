import { saveBackupUndoDataInLocalStorage } from "./undo";
import setCursorPosition from "../import/setCursorPosition";
import { setCounters } from "../import/insertLine";
import SBLogic from "../import/SBLogic";
import gotoPopup from "../templates/gotoPopup";
import render from "../import/render";
import globals from "../import/globals";
import errorPopup from "../templates/errorPopup";
import { adjustCounter } from "../import/line-increament";
import fetchingPopup from "../templates/fetchingPopup";
import scrollToActiveLine from "./scrollToActiveLine";
import trackCursorPosition from "../import/cursorTracker";

function gotoLogicFn() {
  $(".goto-button").click(function() {
    var gotoLine = parseInt($(".goto-input").val());
    var currentLine = $(".line").length;
    if (currentLine < gotoLine) {
      hidePopupWithEase($(".bgoto-popup"), gotoErrorHandler);
      return;
    }

    currentLine===1 && $(".writable-area").focus();
    hidePopupWithEase($(".bgoto-popup"));
    setCursorPosition(1, gotoLine);
    scrollToActiveLine(gotoLine - 1);
    $(".line").removeClass("active").eq(gotoLine - 1).addClass("active");
    SBLogic();
  });
}

function removeGpActivePopup() {
  $(".gp-cancel").click(function() { hidePopupWithEase(".bgoto-popup") });
}

function executeGotoFnHandler() {
  render(gotoPopup);
  $(".goto-input").val($(".line").length);
  $(".goto-input")[0].select();
  $(".goto-input").focus(), gotoLogicFn();
  removeGpActivePopup();
}

function hidePopupWithEase(removeElem, callback) {
  $(removeElem).addClass("close");
  window.setTimeout(function() {
    $(removeElem).remove(), (callback && callback());
  }, 100);
}

function gotoErrorHandler() {
  var message = "The line number is beyond the total numbers of lines";
  var title = "Goto line";
  render.rendWithArgs(errorPopup, title, message);
  $(".revisible").click(function() {
    hidePopupWithEase($(".error-popup"), executeGotoFnHandler);
  });
}

var undoText = "", pasteStart=0, colStart=0;
function setUndoAtClickHandler(str) {
  var selection = window.getSelection().toString() || str;
  undoText = [selection];
  return [selection];
}

function multiTaskHandler() {
  $(".goto").click(executeGotoFnHandler);
  $(".paste").click(function() {
    if ($(this).hasClass("disabled")) return;
    var curposition = trackCursorPosition();
    pasteStart=[].indexOf.call($(".line"), curposition.activeElem);
    colStart = curposition.pos;
    setUndoAtClickHandler("");
    render.rendWithArgs(fetchingPopup, "Please wait");
    window.lastCounter= +$(".counters span:last()").text(); /* last line counter */
    window.pasteMode=true;
    globals.lines=[];
    $.each(globals.copied.split("\r\n"), function(_i, line) {
      globals.lines.push(line.replace(/\s\s/g, "  "));
    });
    globals.copied=globals.lines.join("\r\n");
    document.execCommand("insertText", false, globals.copied.replace(/\r\n/g, "\n"));
    setCounters($(".line").length);
    adjustCounter();
    $(".counters").css("height", "");
    window.pasteMode=false;
    SBLogic();
    enabledDisabledPastOpt(true);
    $(".fetching-popup").remove();
  });
  $(".fcli").click(function() {
    if ($(this).hasClass("disabled")) return;
    var curposition = trackCursorPosition();
    pasteStart=[].indexOf.call($(".line"), curposition.activeElem);
    colStart = curposition.pos;
    var rundoable = /^(?:delete|cut)$/;
    var execCommand = $(this).attr("data-exec-command");
    rundoable.test(execCommand) && setUndoAtClickHandler();
    document.execCommand(execCommand);
    SBLogic();
    rundoable.test(execCommand) && enabledDisabledPastOpt(true, true);
  });
  $(".select-all").click(function() {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents($(".writable-area")[0]);
    selection.removeAllRanges();
    selection.addRange(range);
  });
  $(".s-edit").click(function() {
    editOptionsEnableDisable(this);
  });
  $(".file-opt").click(function() {
    checkActiveDownload();
  });
}

function checkActiveDownload(clearWin, download) {
  var hasText = $(".line").text() && $(".line").text() !== " ";
  var hasFile = $("body").attr("data-file-opened");
  var hasType = $("body").attr("data-file-type");
  var cHandle = hasFile && hasType ? "remove" : "add";
  $((download + clearWin) || ".download, .clear-win")[cHandle + "Class"]("disabled");

  hasText ?
  $(clearWin || ".clear-win").removeClass("disabled") : $(".clear-win").addClass("disabled");
  return {File: hasFile, type: hasType};
}

function editOptionsEnableDisable(items) {
  var swar = window.getSelection().toString().length > 0 ? "remove" : "add";
  $("._estimate")[swar + "Class"]("disabled");

  var hasText = $(".line").text();
  hasText = !!hasText && hasText !== " ";
  hasText ? $(items).find("li").not("._estimate").removeClass("disabled") :
    $(items).find("li.f2ctor").addClass("disabled");
    
  setUndoable();
  enabledDisabledPastOpt();
}

function setUndoable(isReturn) {
  var getUndoData = window.sessionStorage.getItem("undoBackup");
  getUndoData = getUndoData && JSON.parse(getUndoData) || [];
  var method = getUndoData.length ? "remove" : "add";
  !isReturn && $(".undo")[method + "Class"]("disabled");
  return method;
}

function enabledDisabledPastOpt(isSaveLocal, setEmpty) {
  try {
    navigator.clipboard.readText().then(function(data) {
      if (isSaveLocal===true) {
        saveBackupUndoDataInLocalStorage({ data: [setEmpty ? "" : data], undoText, pasteStart, colStart });
      } else {
        data && (globals.copied=data);
        data ? $(".paste").removeClass("disabled") : $(".paste").addClass("disabled");
      }
    });
  } catch(e) {}
  return true;
}

export default multiTaskHandler;
export { hidePopupWithEase, setUndoAtClickHandler, setUndoable, editOptionsEnableDisable, checkActiveDownload };