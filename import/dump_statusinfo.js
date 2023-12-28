function statusInfo() {
  var prevInfo = window.localStorage.getItem("statusInfo");
  var info = statusInfo = {
    col: $(".col").text(),
    line: $(".ln").text(),
    spaces: $(".spaces").text(),
    extension: $(".extension").text(),
    charset: $(".charset").text(),
    zoom: $("span.zoom").text()
  };
  window.localStorage.setItem("statusInfo", JSON.stringify(info));
  return prevInfo && JSON.parse(prevInfo) || info;
}
export default statusInfo;