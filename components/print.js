function print() {
  $("#File")[0].checked=false;
  var fontFamily = {fontFamily: $(".writable-area").css("font-family")};
  fontFamily.fontSize = $(".writable-area").css("font-size");
  var entity = [];
  $(".line").each(function(_i, line) {
    entity.push($(line).text());
  });
  if ($("body").css("--word-wrap")=='break-word') {
    entity = entity.join('<br/>');
  } else {
    entity = entity.join('');
  }
  var windowX = window.outerWidth;
  var windowY = window.outerHeight;
  var win = window.open(window.location.href, '_blank', `top=0,left=0,width=${windowX},height=${windowY}`);
  if (!win) return;
  
  var copyDocument = new DOMParser().parseFromString(entity, "text/html");
  $(copyDocument).find("body").css(fontFamily).css('pointer-events', 'none');
  win.document.write($(copyDocument.firstChild).html());
  win.print();
  win.close();
}
function printPage() {
  $(".print").click(print)
};
export { print };
export default printPage;