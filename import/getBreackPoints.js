function getBreakPoints(targetElement, clipText) {
  var editorWidth = targetElement.clientWidth - 16;
  var text = clipText || targetElement.textContent.trim();

  var currentLine = '';
  var breackLines = [];

  // Extract or split all worlds at \u00a0
  const words = text.split(" ");

  for (const word of words) {
    const dump_line = currentLine + (currentLine ? ' ' : '') + word;
    const font = $(targetElement).css("font");
    const line_width = getTextWidth(dump_line, font);

    if (line_width <= editorWidth) {
      currentLine = dump_line;
    } else {
      breackLines.push(currentLine);
      currentLine = word;
    }
  }

  breackLines.push(currentLine);
  return breackLines;
}
function getTextWidth(text, font) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  ctx.font = font;
  const matrics = ctx.measureText(text);
  return matrics.width;
}
export default getBreakPoints;