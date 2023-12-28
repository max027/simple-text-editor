function scrollToActiveLine( posIndex ) {
  var activeElem = $(".line").eq(posIndex);
  var position = activeElem.position();
  var editorHeight = $(".writable-area").outerHeight();

  var lineHeight = $(activeElem).outerHeight();
  /* get 90% of lineHeight extra margin */
  var extraMargin = (90 * lineHeight) / 100;
  lineHeight = lineHeight + extraMargin;

  var curscroll = $(".writable-area").scrollTop();
  
  if (position.top > editorHeight || position.top > 0) {
    $(".writable-area").scrollTop(curscroll + (position.top - editorHeight) + lineHeight);
  } else {
    curscroll = $(".writable-area").scrollTop() + lineHeight;
    $(".writable-area").scrollTop((curscroll - Math.abs(position.top)) - editorHeight);
  }
}
export default scrollToActiveLine;