function tabOpener() {
  $(".new-tab").click(function() {
    var a = document.createElement("a");
    a.href='/';
    a.target='blank';
    a.click();
  });
  $(".new-window").click(function() {
    var windowX = window.outerWidth;
    var windowY = window.outerHeight;
    var subX = 90 * 2;
    var subY = 50 * 2;
    var finalWidth = windowX - subX;
    var finalHeight = windowY - subY;
    window.open(window.location.href, "_blank",
      `top=${subY / 2},
      left=${subX / 2},
      width=${finalWidth},height=${finalHeight}`
    );
  });
}
export default tabOpener;