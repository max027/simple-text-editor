const settings = JSON.parse($("#json_settings").text());
const originalSettings = settings;
const fontSetup = JSON.parse($("#json_fonts").text());
const cssSetup = {
  "editor.colorTheme": true,
  "editor.fontFamily": true,
  "editor.fontSize": true,
  "editor.fontStyle": true,
  "editor.fontWeight": true,
  "editor.wordWrap": true
};
const editorSetup = {
  "editor.zoomValue": true,
  "editor.zoomEasing": true,
  "editor.zoom": true,
  "editor.fileType": true,
  "editor.tabSize": true,
  "editor.charset": true,
  "editor.statusBar": true
};

$.each(settings, function(setting, value) {
  cssSetup[setting] ? (cssSetup[setting]=value) : (editorSetup[setting]=value);
});

export { originalSettings };
export default { cssSetup, editorSetup, fontSetup };