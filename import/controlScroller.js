import SBLogic from "./SBLogic";

export default function controlScroller() {
  var extraScroll_value = 0;
  SBLogic(true).zoom();

  $(".writable-area").on("keydown keyup", function(e) {
    extraScroll_value = e.type ===  "keydown" ?
      $(this).css("padding-bottom", true) : 0;
  });
  $(".line-increament")[0].addEventListener("wheel", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (!window.activeZoom) {
      var scrollvalue = $(".writable-area").scrollTop() - e.wheelDeltaY;
      $(".writable-area").scrollTop(scrollvalue + extraScroll_value);
    }
  }, {passive: false});
  $(".writable-area").on("scroll", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (!window.activeZoom) {
      $(".line-increament").scrollTop($(this).scrollTop());
    }
  });
}