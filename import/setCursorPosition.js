import { highlightLineCounter } from "./cursorTracker";
function setCursorPosition(desiredIndex, childIndex) {
  desiredIndex = desiredIndex - 1 || 0;
  var jqeditor = $(".writable-area");
  var editor = jqeditor[0];

  try {
    // Now let's create a DOM range
    var range = document.createRange();

    // Assuming you have text content
    var line = jqeditor.find(".line")[childIndex - 1];
    if (!line || line.firstChild===null) {
      return;
    }
    var textNode = line.firstChild;

    // SET range
    range.setStart(textNode, desiredIndex);
    range.setEnd(textNode, desiredIndex);

    // Getting all selection
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    editor.focus();

    /* line counter highlight handler */
    const focusNode = selection.focusNode;
    const parent = focusNode.parentElement;
    const activeElem = $(focusNode).hasClass("line") ? focusNode : parent;
    highlightLineCounter(activeElem);
    /* end code */
  } catch(errot) {};
}
export default setCursorPosition;