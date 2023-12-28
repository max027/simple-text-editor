import { checkActiveDownload } from "../exports/multiTaskHandler";
import textBackups from "../exports/textBackups";
import { print } from "../components/print";
import { setCounters } from "../import/insertLine";

function keyboardShortcuts() {
  var isShiftKey=false;
  var isAltKey = false;
  var isCtrlKey= false;
  var bshiftkey= false;
  /**
   * Alt + N
   * Alt + Shift + N
   * Alt + O
   * Alt + S
   * Alt + Shift + S
   * Alt + P
   */
  function keyBindingHandler(event) {
    // Handle for F5 button insert/date
    if (event.keyCode===116) {
      event.preventDefault();
      $(".time-date").click();
      return;
    }

    if (event.keyCode===16) {
      bshiftkey=true;
    }
    _KBFindNextPrev(event, bshiftkey);

    // console.log(event);
    if (!(event.altKey || event.ctrlKey)) {
      return;
    }
    
    event.altKey ? (isAltKey=true) : (isCtrlKey=true);

    // Handle with Shift key
    if (event.keyCode===16) {
      isShiftKey=true;
    }

    if (isShiftKey) {
      _KBnew(event, true), _KBsave(event, true);
      return;
    }

    _KBDefZoom(event), _KBGoto(event), _KBReplace(event), _KBDownload(event), _KBClear(event);
    _KBnew(event), _KBprint(event), _KBopen(event), _KBsave(event), _KBsaveAll(event), _KBUndo(event);
  }
  function _KBClear(event) {
    if (isCtrlKey && event.keyCode===91) {
      checkActiveDownload();
      $(".clear-win").not(".disabled").click(), event.preventDefault();
    }
  }
  function _KBReplace(event) {
    isCtrlKey &&
      (event.keyCode===70 && $(".find").click() && event.preventDefault()),
      (event.keyCode===72 && $(".replace").click() && event.preventDefault());
  }
  function _KBFindNextPrev(event, Shift) {
    if (Shift) {
      if (event.keyCode===114) {
        $(".find-prev").click();
        event.preventDefault();
        return;
      }
    }
    !Shift && event.keyCode===114 && ($(".find-next").click(), event.preventDefault());
  }
  function _KBDownload(event) {
    if (isCtrlKey && event.keyCode===68) {
      checkActiveDownload();
      $(".download").not(".disabled").click(), event.preventDefault()
    }
  }
  function _KBGoto(event) {
    isCtrlKey && event.keyCode===71 && ($(".goto").click(), event.preventDefault());
  }
  function _KBDefZoom(event) {
    isCtrlKey && event.keyCode===48 && ($(".default-zoom").click());
  }
  function _KBUndo(event) {
    if (isCtrlKey && event.keyCode===90) {
      window.isUnod=true;
      textBackups.text === $(".line").text() && (event.preventDefault());
    }
  }
  function _KBsaveAll(event) {
    isCtrlKey && isAltKey && event.keyCode===83 && ($(".s-save").click(), event.preventDefault());
  }
  function _KBsave(event, Shift) {
    event.keyCode===83 && isCtrlKey && !isAltKey &&
      (Shift ? $(".s-save-as").click() : $(".s-save").click(), event.preventDefault());
  }
  function _KBopen(event) {
    event.keyCode===79 && isCtrlKey && ($(".opener").click(), event.preventDefault());
  }
  function _KBprint(event) {
    event.keyCode===80 && isCtrlKey && (window.dz=true, event.preventDefault(), print());
  }
  function _KBnew(event, Shift) {
    event.keyCode===78 && isAltKey &&
      (Shift ? $(".new-window").click() : $(".new-tab").click(), event.preventDefault());
  }

  window.addEventListener("keyup", function() {
    isShiftKey=false;
    isCtrlKey=false;
    isAltKey=false;
    bshiftkey=false;
  });
  window.addEventListener("keydown", keyBindingHandler);
  window.removeEventListener("keyup", keyBindingHandler);
}
export default keyboardShortcuts;