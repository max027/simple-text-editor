import tmpFilename from "./tmpFilename";
function setDefaultFile() {
  var rnoAcceptChar = /[\\\/\:\*\?\<\>\"\|]/g;
  var customTitle = $(".line").first().text().substring(0, 20);
  customTitle = customTitle.trim().replace(rnoAcceptChar, "");
  var setFile = !!customTitle && " – ".concat(customTitle) || "";
  document.title = "Notebook" + setFile;
  tmpFilename.File = !!setFile && setFile.slice(3);
}
export default setDefaultFile;