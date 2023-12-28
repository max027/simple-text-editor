import { hidePopupWithEase } from "../exports/multiTaskHandler";
import unmatchPopup from "../templates/unmatchPopup";
import SBLogic from "../import/SBLogic";

import render from "../import/render";
function findNext(find, startFrom, isWrapAround, matchCase) {
  findBoth("next", find, startFrom, isWrapAround, matchCase);
}
function findPrev(find, startFrom, isWrapAround, matchCase) {
  findBoth("prev", find, startFrom, isWrapAround, matchCase);
}
function storeMatcher(regExp, seek) {
  var match, index, Ctor;
  $(".line").each(function(i, line) {
    while((match=regExp.exec($(line).text()))!==null) {
      Ctor = match.shift().length;
      index = match.index;
      seek.push({start: index, end: index + Ctor, line: i});
    }
  });
}
function senitizeText(textData) {
  var senitized = [],
    rnoSC = /\w/, text = textData.split("");
  $.each(text, function(_i, char) {
    senitized.push(rnoSC.test(char) ? char : "\\" + char);
  });
  return senitized.join("");
}
var dirIndex=-1; /* next/prev direction controls */
var init = [];
var prevDir=undefined;
export default function findBoth(dir, find, startFrom, isWrapAround, matchCase) {
  var match, matches = [], regExp, flags = "g", teek, selection, range;

  var originalText = find;
  /* Senitizing findable text data */
  find = senitizeText(find);
  flags += matchCase ? "" : "i";

  /* Initialize findable regexp */
  regExp = new RegExp(find, flags);

  storeMatcher(regExp, matches);

  if (window.isReplaced) {
    storeMatcher(regExp, matches);
    window.isReplaced=false;
    dir==="next" && dirIndex--;
  }

  dir==="next" ? dirIndex++ : dirIndex--;

  if (!init.length ||
    (init.length && (init[0]!==startFrom[0] || init[1]!==startFrom[1]))) {
    init[0]=startFrom[0];
    init[1]=startFrom[1];
    dirIndex=-1;
    for (match in matches) {
      match = matches[match];
      dirIndex++;
      if (match.start >= init[0] && match.line === init[1]) {
        break;
      } else if (match.line > init[1]) {
        break;
      }
    }
  }

  if (!matches.length ||
    (!isWrapAround && !matches[dirIndex] && prevDir==dir)) {
    render.rendWithArgs(unmatchPopup, originalText);
    $(".btn-ok").click(function() {
      hidePopupWithEase($(".error-popup"));
    });
    return;
  }

  if (!prevDir || prevDir!==dir) {
    prevDir=dir;
  }

  if (!matches[dirIndex]) {
    dirIndex = dir==="next" ? 0 : matches.length - 1;
  }

  teek = matches[dirIndex];
  window.activeTeek=teek;

  selection = window.getSelection();
  range = document.createRange();

  var firstNode = ($(".line")[teek.line] || {}).firstChild;
  var lastNode = ($(".line")[teek.line] || {}).firstChild;

  range.setStart(firstNode, teek.start);
  range.setEnd(lastNode, teek.end);

  selection.removeAllRanges();
  selection.addRange(range);
  SBLogic();
  return teek;
}

function replaceText(find, replaceText, matchCase, global) {
  var matches = [], regExp, flags = "g", range, originalText;

  originalText = find;

  /* Senitizing findable text data */
  find = senitizeText(find);

  flags += matchCase ? "" : "i";
  
  /* Initialize findable regexp */
  regExp = new RegExp(find, flags);

  storeMatcher(regExp, matches);

  if (!matches.length) {
    render.rendWithArgs(unmatchPopup, originalText);
    $(".btn-ok").click(function() {
      hidePopupWithEase($(".error-popup"));
    });
    return;
  }

  window.isReplaced=true;

  if (!global) {
    var teek = window.activeTeek;
    range = document.createRange();
    range.setStart($(".line")[teek.line].firstChild, teek.start);
    range.setEnd($(".line")[teek.line].firstChild, teek.end);
    
    var replace = document.createTextNode(replaceText);
    
    range.deleteContents();
    range.insertNode(replace);
    return;
  }

  $.each(matches, function(_i, teek) {
    range = document.createRange();

    range.setStart($(".line")[teek.line].firstChild, teek.start);
    range.setEnd($(".line")[teek.line].firstChild, teek.end);
    
    var replace = document.createTextNode(replaceText);
    range.deleteContents();
    range.insertNode(replace);
  });
  matches.length=0;
}

export { findNext, findPrev, replaceText };