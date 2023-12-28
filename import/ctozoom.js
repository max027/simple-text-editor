import SBLogic from "./SBLogic";

function clickToZoomHandler() {
  var zoomObject = new SBLogic();

  $("li.zoom, .secondry-toggle").hover(function() {
    $('.secondry-toggle').addClass('active');
  },
  function() {
    $('.secondry-toggle').removeClass('active');
  });
  $(".default-zoom").click(function() { zoomObject.zoom(true, true)});
  $(".cto-zoom").click(function() { zoomObject.zoom($(this).attr("data-zoom")) });
}
export default clickToZoomHandler;