import { checkActiveDownload } from "./multiTaskHandler";
import render from "../import/render";
import globals from "../import/globals";
import { setUndoable } from "./multiTaskHandler";
import contextToggle from "../templates/contextToggle";

function readingOrder(dir) {
  var readingOrder = window.sessionStorage.getItem("readingOrder");
  readingOrder = dir || readingOrder || "ltr";
  readingOrder=="ltr" ?
  $("body").css("--align-text", "left") : $("body").css("--align-text", "right");
  $("body").css("--reading-order", readingOrder);
  window.sessionStorage.setItem("readingOrder", readingOrder);
}

function adjusted(elements) {
  return function() {
    return elements;
  };
}

function cbContext() {
  checkActiveDownload(".cfr-clear-win", ".cfr-download,");
  $(".cfr-undo")[setUndoable() + "Class"]("disabled");
  if (window.getSelection().toString()) {
    $(".rsd-slag").removeClass("disabled");
  }
  navigator.clipboard.readText().then(function(clipData) {
    clipData && (globals.copied=clipData);
    clipData && $(".cfr-paste").removeClass("disabled");
  });
  $(".auto-fire").click(function() {
    var target = "." + $(this).attr("data-target");
    $(target).click();
    $(".context-toggle").remove();
  });

  $(".cfr-rtl-rorder").click(function() {
    var dir = {true: 'rtl', false: 'ltr'};
    var checkbox = $("#writeDir")[0];
    checkbox.checked ? (checkbox.checked=false) : (checkbox.checked=true);
    readingOrder(dir[checkbox.checked]);
    $(".context-toggle").remove(), $(".writable-area").focus();
  });
}

export default function contextOption() {
  readingOrder();
  $(document).on("mousedown pointerdown visibilitychange resize", function(e) {

    if ($(e.target).parents(".tsd-list").length || $(e.target).is(".tsd-list")) {
      return;
    }
    $(".context-toggle").remove();

    if ($(e.target).is(".show-hide-status-bar")) {
      return;
    }
    $(".alert-status-bar").remove();
  });
  $(".writable-area").on("contextmenu", function(e) {
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    var fragment = document.createDocumentFragment();
    $(fragment).append(contextToggle());

    $(".btoggle").each(function(_i, options) {
      options.checked=false;
    });
    
    const toggle = $(fragment).find(".context-wrap");

    const defaultCss = {
      transform: "scale(1)", opacity: 1
    };

    /* temporarily render for get width and height */
    render(adjusted(fragment)).runScript(cbContext);

    const togHeight = toggle.height();
    const togWidth = toggle.width();

    const boxHeight = $(this).outerHeight();
    const boxWidth = $(this).outerWidth();

    const clientX = e.offsetX;
    const clientY = e.clientY - $(".__primary-navbar").outerHeight();

    const attachWidth = clientX + togWidth;
    const attachheight = clientY + togHeight;

    const alignX = {};
    const alignY = {};

    // Handle X-Axis
    attachWidth < boxWidth ? (alignX["left"]=e.clientX + 1) : (alignX["right"]=Math.abs(boxWidth - clientX));

    // Handle Y-Axis
    attachheight < boxHeight ? (alignY["top"]=e.clientY) : (alignY["bottom"]=Math.abs(clientY - boxHeight));

    if ("bottom" in alignY) {
      alignY["bottom"] += $(".status-bar").outerHeight() || 0;
    }

    var transOriginY = Object.keys(alignY).join("");
    var transOriginX = Object.keys(alignX).join("");
    $(toggle).css(alignX).css(alignY).css("--box-origin", transOriginX.concat(" ").concat(transOriginY));
    $(toggle).css(defaultCss);
    
    var readingOrder = window.sessionStorage.getItem("readingOrder");
    var checkbox = $("#writeDir")[0];
    readingOrder=="rtl" ? (checkbox.checked=true) : (checkbox.checked=false);
  });
}