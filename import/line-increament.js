import { saveBackupUndoDataInLocalStorage } from "../exports/undo";
import trackCursorPosition from "./cursorTracker";
import setDefaultFile from "./setDefaultFile";
import statusInfo from "./dump_statusinfo";
import render from "./render";
import settings from "./settings";
import SBLogic from "./SBLogic";
import fetchingPopup from "../templates/fetchingPopup";
import getBreakPoints from "./getBreackPoints";
import { highlightLineCounter } from "./cursorTracker";

function lineIncrement() {
  var undoText, pasteStart = 0, colStart = 0;
  var s = false, lineHeight; window.isPaste=false;
  const originalHeight = fakeAppend($(".writable-area"), true, s);

  window.originalRootLineHeight=originalHeight;
  $(".writable-area .line").eq(0).outerHeight(originalHeight);
  startIncreament(1, originalHeight);
  window.originalHeight=originalHeight;

  $(".writable-area").on("input paste", function(e) {
    e.type=="input" && !window.activeFile && setDefaultFile();
    
    /* Handle paste mode return executation */
    if (e.type==="paste" || window.pasteMode) {
      window.pasteMode=true;
      return;
    }
    if (window.isUnod) {
      window.pasteMode=true;
      window.isPaste=true;
      startIncreament($(".line").length, originalHeight, true);
      adjustCounter();
      window.isPaste=false;
      window.isUnod=false;
      window.pasteMode=false;
      return;
    }
    var border = $(".line").css("border", true);
    var editorHeight = $(this).outerHeight();
    var fullHeight = this.scrollHeight;
    var hasData = $(this).children().length;
    window.isPaste=false;
    lineHeight = fakeAppend(this, false, s, originalHeight);
    hasData && startIncreament(hasData, lineHeight);
    lineHeight=0; /* reset line-height */
    $(".counters").outerHeight(fullHeight - 18);
    SBLogic();
    adjustLineHeight(window.LOF);
    if (window.LOF &&
      window.LOF !== $(this).children()[hasData - 1]) {
      return;
    }
    if (editorHeight < fullHeight &&
      originalHeight===((window.LOF || {}).scrollHeight * border)) {
      $(".writable-area").scrollTop($(".writable-area")[0].scrollHeight);
    }
  });
  $(".writable-area").keydown(function(e) {
    /* Handle (\t) [\u00a0] tab insert in writable editor */
    if (e.keyCode===9 || e.key==="Tab") {
      activeInsertTab(e);
    }

    /* Handle Enter key from next line with enter key */
    (e.keyCode===13 || e.key=="Enter") && adjustCounter();

    /* Handle arrow-up/down move active line */
    if (e.keyCode===38 || e.keyCode===40) {
      moveLineWithArrowKey(e, this);
    }

    /* Handle Backspace key for remove empty line height */
    e.keyCode===8 || e.key=="Backspace" && resetEmptyLineHeight();

    s = e.key==="Space" || e.keyCode === 32;
    if (e.key==="Backspace"||e.keyCode===8) {
      const textIndex = $(this).find(".line").text();
      const children = $(".writable-area").children().length==1;
      s=true;
      window.isPaste=false;
      (!textIndex || textIndex==" ") &&
        children && e.preventDefault();
      (textIndex==" " && children) && $(this).find(".line").html("");
    }
  });
  $(".writable-area").on("focus blur click", function(e) {
    var activeLine = e.target;
    if (activeLine===this) { /* ignore parent of line */
      return;
    }
    e.type === 'click' && (SBLogic(), statusInfo());
    window.activeLine=activeLine;
    window.LOF = activeLine; // last of line
    e.type!=="blur" ?
    attach(activeLine, this) : $(".line").removeClass("active");
    window.getFindPosition={ col: +$(".col").text(), line: +$(".ln").text() - 1 };
  });
  $(".writable-area")[0].addEventListener("paste", function(e) {
    render.rendWithArgs(fetchingPopup, "Please wait");
    var curposition = trackCursorPosition();
    pasteStart=[].indexOf.call($(".line"), curposition.activeElem);
    colStart = curposition.pos;
    var curLine = $(".writable-area").children().length;
    e.preventDefault();
    window.lastCounter= +$(".counters span:last()").text();
    var text = (e.clipboardData || window.clipboardData).getData("text/plain");
    undoText = [""];
    var holdText = [];
    $.each(text.split("\r\n"), function(_i, line) {
      holdText.push(line.replace(/\s\s/g, "  "));
    });
    text = holdText.join("\r\n");
    text = text.replace(/\r\n/g, "\n");
    document.execCommand("insertText", false, text);
    /* Initialize new Updated Lines */
    const newLine = $(".writable-area").children().length;
    window.isPaste = curLine < newLine;
    lineHeight=0; /* reset line-height */
    startIncreament(newLine, originalHeight, true);
    adjustCounter(lineHeight);
    window.pasteMode=false;
    window.isPaste=false;
    /* Status bar Handling */
    SBLogic(); /* execute statusbar method */
    $(".writable-area").removeClass("def");
    const scrollHeight = $(".writable-area")[0].scrollHeight;
    /* showing scrollbar thumb for few second */
    $(this).addClass("active");
    window.setTimeout(function() {
      $(".writable-area").removeClass("active");
    }, 1000);
    $(".writable-area").scrollTop(scrollHeight);
    $(".counters").outerHeight(scrollHeight - $(this).css("padding-bottom", true));
    $(".fetching-popup").remove();
    saveBackupUndoDataInLocalStorage({data: [text], undoText, pasteStart, colStart});
  });
}
function adjustLineHeight(targetLine) {
  if (!targetLine) {
    return;
  }
  var lineHeight = targetLine.scrollHeight, index;
  index = [].indexOf.call($(".line"), targetLine);

  var columns = getBreakPoints(targetLine).length;
  lineHeight = lineHeight + columns;

  var counter = $(".counters span")[index];
  $(targetLine).add(counter).outerHeight(lineHeight);
}
function resetEmptyLineHeight() {
  $(".lines").each(function(_i, line) {
    if (!$(line).text().trim()) {
      $(line).css("height", "");
    }
  });
}
function moveLineWithArrowKey(e) {
  SBLogic();
  var activeCurrentLine = trackCursorPosition().activeElem || {};
  var movedLineElem = e.keyCode===38 ?
    activeCurrentLine.previousElementSibling : activeCurrentLine.nextElementSibling;
  attach((movedLineElem || activeCurrentLine || $(".line:last")), $(".writable-area"));
  highlightLineCounter(movedLineElem || activeCurrentLine);
}
function adjustCounter(lineHeight, defExtra) {
  if (lineHeight===true) {
    defExtra=lineHeight;
    lineHeight=undefined;
  }
  $.each($(".writable-area .line"), function(i) {
    const height = this.scrollHeight || lineHeight;
    const border = $(this).css("border", true);
    $($(".counters span")[i]).outerHeight(height + (border * 2));
  });
  !defExtra && $(".line").removeAttr("style");
}
function attach(activeLine, editor) {
  /* remove defautl active line */
  $(editor).removeClass("def");
  $(".line").removeClass("active");
  $(activeLine).addClass("active");
}
function activeInsertTab(event) {
  // Prevent the default tab behavior
  event.preventDefault();

  const tabsize = settings.editorSetup["editor.tabSize"];
  const tabCode = "\u00a0".repeat(tabsize);

  // now insert four non-breaking spaces for the tab key
  var editor = $(".writable-area")[0];
  var doc = editor.ownerDocument.defaultView;
  var sel = doc.getSelection();
  var range = sel.getRangeAt(0);

  var tabNode = document.createTextNode(tabCode);
  range.insertNode(tabNode);

  range.setStartAfter(tabNode);
  range.setEndAfter(tabNode); 
  sel.removeAllRanges();
  sel.addRange(range); /* add the tab value in editor */
  SBLogic();
}
function fakeAppend(editor, isEmpty, space, originalHeight) {
  const line = $(editor).find(".line")[0];
  var border = $(line).css("border", true) * 2;
  if (space) return;
  !$(editor).text().trim() && $(line).html("&nbsp;");
  const height = originalHeight || ($(line).height() + border);
  isEmpty && $(line).empty();
  return height;
}
function startIncreament(lines, lineHeight, skipCond, paste) {
  const prelines = $(".writable-area").find(".line");
  const linecount = lines.length;
  const counters = $(".counters").children().length;

  if (!skipCond && (lines >= 1 && counters > lines)) {
    $($.createArray(
      $(".counters span")).slice(lines - counters)
    ).remove();

  } else if (lines > counters) {
    if (!window.isPaste && !paste) {
      increamentCounter(lineHeight, lines);

    } else if (window.isPaste || paste) {
      for (let i=window.lastCounter + 1; i <= (lines); i++) {
        increamentCounter(lineHeight, i);
      }
    }
  }

  linecount > 1 && prelines.first().html(prelines.first().html().trim());
}
function increamentCounter(lineHeight, counter) {
  counter = counter || 1;
  lineHeight = lineHeight || window.originalHeight;
  $(".counters").append(`<span style="height:${lineHeight}px">${counter}</span>`);
  window.isPaste=false;
}

$(window).on("resize", function() { adjustCounter( true ); });

export default lineIncrement;
export { adjustCounter, startIncreament, increamentCounter };