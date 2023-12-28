function NBSinit(settings, themeColor) {
  const colorTheme = settings.cssSetup["editor.colorTheme"];

  setColorTheme(colorTheme, themeColor);
  delete settings.cssSetup["editor.colorTheme"];

  $.each(settings.cssSetup, function(setproperty, setvalue) {
    $("body").css(
      cssSetupFn(setproperty, setvalue, settings.fontSetup)
    );
  });
}
function setFontSize() {
  var fsizeElem = "";
  for (var i = 1; i <= 30; i++) {
    fsizeElem += `<div class="font-size" data-value="${i}">${i}</div>`;
  }
  return {
    length: i - 1,
    html: fsizeElem
  };
}

function cssSetupFn(setproperty, setvalue, fonts) {
  const word_wrap = setvalue === 'on' ? 'break-word' : 'initial';
  var css_property = setproperty.slice(7);
  const cssObject = {};
  css_property = css_property == "wordWrap" ? "whiteSpace" : css_property;
  const modifier_property = {
    "editor.fontFamily": fonts,
    "editor.fontWeight": {regular: "normal", medium: 500, bold: "bold"},
    "editor.wordWrap": {on: "break-word", off: "nowrap"}
  };
  "editor.wordWrap"===setproperty && (cssObject["--word-break"]=word_wrap);
  cssObject['--word-wrap']=word_wrap;
  css_property = "--" + $.dashed(css_property);
  return (modifier_property[setproperty] ?
  (cssObject[css_property]=modifier_property[setproperty][setvalue]) : (cssObject[css_property]=setvalue)),
  cssObject;
}

function setColorTheme(colorTheme, theme) {
  var mode = {
    true: "dark",
    false: "light"
  };
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  colorTheme = colorTheme === "default" ? mode[media.matches] : colorTheme;
  $("body").attr("data-color-theme", colorTheme);
  $(".theme-color").attr("content", theme[colorTheme]);
}

export default NBSinit;

export {setFontSize, cssSetupFn, setColorTheme};