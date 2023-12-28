import findReplacePopup from "../templates/findReplcePopup";
import render from "../import/render";
import findBoth from "./findBoth";
import trackCursorPosition from "../import/cursorTracker";
import scrollToActiveLine from "../exports/scrollToActiveLine";
import { replaceText } from "./findBoth";

function saveFindValue(text, isWrapAround, matchCase) {
  var prevData = recentFindData() || {};
  var data = JSON.stringify($.extend(prevData, {text, isWrapAround, matchCase}));
  window.localStorage.setItem("find", data);
}

function recentFindData() {
  var findData = window.localStorage.getItem("find");
  try { findData = findData && JSON.parse(findData) }
  catch(e) {};
  return findData || {};
}

export default function findReplace() {
  
  function enabledList() {
    var hasText = $(".line").text();
    hasText = !!hasText && hasText !== " ";
    hasText ?
      $("li.f2ctor").removeClass("disabled") : $("li.f2ctor").addClass("disabled");
  }

  function position() {
    return window.getFindPosition || {col: 1, line: 0};
  }

  $(".find-next, .find-prev").click(function() {
    var findData = recentFindData();
    var fdir = $(this).attr("data-action");

    enabledList();
    if ($(this).hasClass("disabled")) {
      return;
    }

    if (!(findData!==null && ("text" in findData))) {
      openFindReplacePopup();
      return;
    }
    
    var cursorLocation = position();
    var startFrom = [cursorLocation.col, cursorLocation.line];

    // setCursorPosition(cursorLocation.col, cursorLocation.line + 1);
    var teek = findBoth(fdir, findData.text, startFrom, findData.isWrapAround, findData.matchCase);
    teek!=null && scrollToActiveLine(teek.line);
  });

  function openFindReplacePopup(openReplace) {
    enabledList();
    if ($(this).hasClass("disabled")) return;
    if (!$(".primary-popup").length) {
      var curpos = trackCursorPosition();
      var prevData = recentFindData();
      render(findReplacePopup).runScript(initFindReplace);
      var selectedText = window.getSelection().toString();
      if (prevData.text || selectedText) {
        $("#find").val(selectedText || prevData.text);
        $("#find")[0].select();
      }
      if (prevData.replaceText) {
        $("#replace").val(prevData.replaceText);
      }
      window.getFindPosition={
        col: curpos.pos,
        line: [].indexOf.call($(".line"), curpos.activeElem)
      };
      $("#find").focus();
      frSetup(), moreOptionSetup(prevData);
    }
    if (openReplace) {
      $("#toggleReplace")[0].checked=true;
    }
  }

  $(document).click(function(e) {
    if (!$(e.target).is(".b-more-opt")) {
      $(".more-options").css("overflow", "");
      $(".b-more-opt").removeClass("show");
    }
    if (!$(e.target).is(".b-tdopt") && !$(e.target).parents(".controls").length) {
      $(".b-tdopt").removeClass("active");
    }
  });

  function moreOptionSetup(data) {
    $("#wrapAround")[0].checked=data.isWrapAround;
    $("#matchCase")[0].checked=data.matchCase;
  }

  function frSetup() {
    $(".b-more-opt").click(function() {
      $(this).hasClass("show") ? window.setTimeout(function() {
        $(".more-options").css("overflow", "initial");
      }, 300) : $(".more-options").css("overflow", "");
    });
    
    $(".fr-handler").on("change", function() {
      var pauseElem = $(".fr-handler").not(this);
      var prevData = recentFindData();
      var activeElem = $(this);
      var cdata = {
        [pauseElem.attr("data-value")]: pauseElem[0].checked,
        [activeElem.attr("data-value")]: this.checked
      };

      if (prevData.text) {
        cdata["text"]=prevData.text;
      }

      window.localStorage.setItem("find", JSON.stringify(cdata));
      $(".b-more-opt").removeClass("show");
    });
  }

  $(".find").click(function() { openFindReplacePopup.call(this) });
  $(".replace").click(function() { openFindReplacePopup.call(this, true) });

  function initFindReplace() {
    $(".replace-all, .r-replace").click(function() {
      var prevData = recentFindData();
      var matchCase = $("#matchCase")[0].checked;
      var global = $(this).attr("data-global");
      var find = $("#find").val();
      var replace = $("#replace").val();
      
      if (replace) {
        prevData.replaceText = replace;
        replaceText(find, replace, matchCase, JSON.parse(global));
        window.localStorage.setItem("find", JSON.stringify(prevData));
      }
    });

    $(".b-find").click(function() {
      var fdir = $(this).attr("data-dir");
      var isWrapAround = $("#wrapAround")[0].checked;
      var matchCase = $("#matchCase")[0].checked;

      var cursorLocation = position();
      var startFrom = [cursorLocation.col, cursorLocation.line];

      var findValue = $("#find").val();

      if (!findValue) {
        return;
      }

      saveFindValue(findValue, isWrapAround, matchCase);
      var teek = findBoth(fdir, findValue, startFrom, isWrapAround, matchCase);
      teek!=null && scrollToActiveLine(teek.line);
    });

    $(".fr-exit").click(function() {
      $("._3Feyyou7").addClass("fade-to-hide").on("transitionend", function() {
        $(".primary-popup").remove();
      });
    });
  }
}