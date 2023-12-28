function trackCursorPosition() {
  var cursorOffset, activeElem;
  try {
    const selection = window.getSelection();
    const focusNode = selection.focusNode;
    const parent = focusNode.parentElement;
    activeElem = $(focusNode).hasClass("line") ? focusNode : parent;

    if (selection.rangeCount <= 0 ) {
      return;
    }

    $(".line").removeClass("active");
    $(activeElem).addClass("active");

    const range = selection.getRangeAt(0);
    cursorOffset = range.startOffset;

    highlightLineCounter(activeElem);
  }
  catch(error) {
    return { pos: $(".line").last().text().length, activeElem: $(".line:last")[0] };
  }
  return { pos: cursorOffset, activeElem };
}

function highlightLineCounter(activeLine) {
  var childIndex=0;
  var forcedElem = activeLine || $(".line:last")[0];
  childIndex=[].indexOf.call($(".line"), forcedElem);
  if (childIndex > -1) {
    $($(".counters span").css("opacity", "")[childIndex]).css("opacity", 1);
  }
}
export default trackCursorPosition;
export { highlightLineCounter };