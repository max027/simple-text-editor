function dataParser(data) {
  var rflipsettings = /(?:medium|bold|regular)/i, matcher;
  if (data["editor.wordWrap"]) {
    return data;
  }
  var parser = {}, val, keyword;
  for (keyword in data) {
    parser["editor." + $.camelCase(keyword)]=data[keyword].toLowerCase();
  }
  if ((val = data["font-style"]) && val.indexOf(" ") > -1) {
    delete parser["editor.fontStyle"];
    var value = val.toLowerCase().split(" ");
    var fontWeight = value.shift();
    parser["editor.fontWeight"]=fontWeight;
    parser["editor.fontStyle"]=value.join("");
  }

  if ((matcher=rflipsettings.exec(parser["editor.fontStyle"]))) {
    parser["editor.fontStyle"]="normal";
    parser["editor.fontWeight"]=matcher.shift().toLowerCase();
  }
  return parser;
}
export default dataParser;