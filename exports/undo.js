import setCursorPosition from "../import/setCursorPosition";
import undoBackup from "../import/undoBackup";
import { setCounters } from "../import/insertLine";
import { adjustCounter } from "../import/line-increament";
import SBLogic from "../import/SBLogic";

export default function Undo() {
  $(".undo").click(function() { forceUndoData(), startUndo(undoBackup.text) });
}

function startUndo(undoTeek) {
  if (!undoTeek.length) {
    return;
  }
  var teek = undoTeek.pop(), text = teek.text.join("");
  var len = text.length, childIndex = teek.line,
    fundoText = teek.undoText.join("");

  var startIndex = teek.col - len - 1;
  var endIndex = teek.col - 1;

  if ("pasteStart" in teek && "colStart" in teek ) {
    select(teek.pasteStart, teek.colStart, teek.line, teek.col, fundoText);
  }
  else {
    replace(startIndex, endIndex, fundoText, childIndex, teek.col);
  }
  
  if (!undoTeek.length) {
    window.sessionStorage.removeItem("undoBackup");
  }
  window.sessionStorage.setItem("undoBackup", JSON.stringify(undoTeek));
}

function replace(setStart, setEnd, text, i, col) {
  const onReplace = $(".line")[i - 1];

  if (setStart < 0 || !onReplace.firstChild) {
    setCursorPosition(col, i);
  } else {
    const selection = window.getSelection();

    const range = document.createRange();
    range.setStart(onReplace.firstChild, setStart);
    range.setEnd(onReplace.firstChild, setEnd);

    selection.removeAllRanges();
    selection.addRange(range);
  }
  insertTex(text);
}

function insertTex(text) {
  window.lastCounter= +$(".counters span:last()").text(); /* last line counter */
  window.pasteMode=true;
  document.execCommand("insertText", false, text);
  setCounters($(".line").length);
  adjustCounter();
  window.pasteMode=false;
  SBLogic();
  $(".line").removeClass("active").eq( +$(".ln").text() - 1 ).addClass("active");
}

function select(lnstart, colstart, lnend, colend, text) {
  lnstart = lnstart < 0 ? 0 : lnstart;
  var startLine = ($(".line").eq(lnstart)[0] || {}).firstChild;
  var endLine = ($(".line").eq(lnend - 1)[0] || {}).firstChild;
  if (startLine !=null && endLine !=null ) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents($(".writable-area")[0]);

    range.setStart(startLine, colstart);
    range.setEnd(endLine, colend - 1);

    selection.removeAllRanges();selection.addRange(range);
  } else {
    $(".line").length===1 ?
    $(".writable-area").focus() : setCursorPosition(lnend, colend);
  }
  insertTex(text);
}

function forceUndoData() {
  var curdata = window.sessionStorage.getItem("undoBackup");
  curdata = curdata && JSON.parse(curdata);
  undoBackup.text = curdata;
}

function saveBackupUndoDataInLocalStorage(backups, _isOverride) {
  var sender = {}, save = [], tmpUndoBackup;
  var undoText = backups.undoText;
  sender.text = backups.data;
  var col = +$(".col").text();
  var line = +$(".ln").text();
  $.extend(sender, { col, line, undoText });

  if (!sender.text.length) {
    return;
  }

  if ("pasteStart" in backups) {
    sender.pasteStart=backups.pasteStart;
  }

  if ("colStart" in backups) {
    sender.colStart = backups.colStart;
  }

  var tmpUndoBackup = window.sessionStorage.getItem("undoBackup");
  tmpUndoBackup = tmpUndoBackup && JSON.parse(tmpUndoBackup);
  tmpUndoBackup = tmpUndoBackup || save;
  tmpUndoBackup.push(sender);

  window.sessionStorage.setItem("undoBackup", JSON.stringify(tmpUndoBackup));
  undoBackup.text = tmpUndoBackup;
}

export { saveBackupUndoDataInLocalStorage };