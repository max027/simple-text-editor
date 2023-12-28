import { increamentCounter } from './line-increament';
import statusInfo from "./dump_statusinfo";
import SBLogic from "./SBLogic";
import textBackups from '../exports/textBackups';
import setCursorPosition from "./setCursorPosition";

const CRLF = /\r\n/g;

function setCounters(totalLine) {
  var counters=[];
  for (var i=1; i <= totalLine; i++) {
    var lineNo = document.createElement("span");
    $(lineNo).html(i);
    var columns = $(".line")[i - 1];
    var outerHeight = $(columns).outerHeight();
    $(lineNo).css("height", outerHeight);
    counters.push(lineNo);
  }
  
  const scrollHeight = $(".writable-area")[0].scrollHeight;
  $(".counters").empty().append(counters);
  !$(".counters").children().length && increamentCounter();
  $(".counters")
    .outerHeight(scrollHeight - $(".writable-area").css("padding-bottom", true));
}
function insertLine(lines) {
  var text;
  
  $.each(lines, function(i, line) {
    lines[i]=line.replace(/\s\s/g, "  ");
  });

  if (CRLF.test(lines.join(""))) {
    text = lines.join("").replace(CRLF, "\n");
  } else if (/\n/.test(lines.join(""))) {
    text = lines.join("");
  } else {
    text = lines.join("\n");
  }
  
  const editor = $(".writable-area")[0];
  $(editor).removeClass("def");
  document.execCommand("insertText", true, text);
  $(editor).addClass("active");
  !!$(".line").text() && $(".line").css("height", "initial");
  var savedStatusInfo = statusInfo();
  var childIndex = +savedStatusInfo.line;
  var pos = +savedStatusInfo.col;

  var timeout = window.setTimeout(function() {
    const scrollHeight = $(".writable-area")[0].scrollHeight;
    setCounters(text.split("\n").length);
    SBLogic(); /* execute statusbar method */
    $(".writable-area").scrollTop(scrollHeight);
    $(".preloader").remove();
    setCursorPosition(pos, childIndex);
    window.clearTimeout(timeout);
    $(".writable-area").scrollTop(0);
    textBackups.text = $(".line").text();
  }, 100);
}
export default insertLine;
export { setCounters };