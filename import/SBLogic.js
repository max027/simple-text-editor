import trackCursorPosition from "./cursorTracker";
import settings from "./settings";
import { setCounters } from "./insertLine";

function SBLogic(skipExec) {
  if (!(this instanceof SBLogic)) {
    return new SBLogic(skipExec);
  }
  SBLogic.zoomContainer = $(".__notebook-editor-wrap");
  SBLogic.spaceCounter=$(".spaces");
  SBLogic.editor=$(".writable-area");
  SBLogic.elemLn = $(".ln");
  SBLogic.zoom = $("span.zoom");
  SBLogic.column = $(".col");
  !skipExec && this.executeAll();
}
SBLogic.prototype = {
  constructor: SBLogic,
  executeAll: function() {
    this.countSpace();
    this.countLn();
    this.countCol();
  },
  countSpace: function() {
    const cursorPos = trackCursorPosition();
    const activeElem = cursorPos.activeElem;
    var prevLine = $(activeElem).prevAll();
    prevLine = (!!prevLine.length && 
      prevLine) || activeElem;
    var text, lastLineOfText,
      arrElem = $.createArray($(prevLine).not(activeElem).add(activeElem));

    lastLineOfText = arrElem.pop();
    text = $(arrElem).text();
    text += $(lastLineOfText).text().substring(0, cursorPos.pos);
    SBLogic.spaceCounter.text(text.split(/\s/).length - 1);
  },
  countLn: function() {
    const cursorPos = trackCursorPosition();
    var col=1;
    var prevElem = cursorPos.activeElem || $(".line:last")[0];
    while(prevElem.previousElementSibling) {
      col++;
      prevElem = prevElem.previousElementSibling;
    }
    SBLogic.elemLn.text(col);
  },
  countCol: function() {
    const cursorPos = trackCursorPosition();
    SBLogic.column.text(cursorPos.pos + 1);
  },
  setZoom: function(key, zoom_value) {
    window.sessionStorage.setItem(key, zoom_value);
  },
  zoomNow: function(zoomData) {
    const zoom =  {zoom: zoomData.zoom + "%"};
    SBLogic.zoomContainer.css(zoom);
    SBLogic.zoom.text(zoom.zoom);
    setCounters($(".line").length);
  },
  zoomSetup: function(zoom_value, behavior) {
    var minzoom=25, maxzoom=500, curZoom = zoom_value.zoom;

    function adjustZoomValue(curZoom) {
      if (curZoom===125 && behavior==='-') {return 15}
      if (curZoom===25) {return 8}
      if (curZoom===110 && behavior == '+') {return 5}
      if (curZoom===110) {return 10}
      if (curZoom===100) {return 10}
      if (curZoom===90) {return 10}
      if (curZoom===80) {return behavior === '+' ? 10 : 5}
      if (curZoom===75) {return behavior === '+' ? 5 : 8}
      if (curZoom===67) {return behavior === '+' ? 8 : 17}
      if (curZoom===50) {return 17}
      if (curZoom===33) {return behavior === '+' ? 17 : 8}
      if (curZoom < 200) {return curZoom===115 ? 10 : 25}
      if (curZoom===200 && behavior==='-') {return 25}
      if (curZoom < 300) {return 50}
      if (curZoom===300 && behavior==='-') {return 50}
      if (curZoom <= maxzoom) {return 100}
      return curZoom;
    }

    if (curZoom >= maxzoom && behavior == '+' ||
      curZoom <= minzoom && behavior == '-') {
      return;
    }

    curZoom > maxzoom && (curZoom=maxzoom);
    curZoom < minzoom && (curZoom=minzoom);

    zoom_value.zoom = zoom_value.zoom + (behavior + adjustZoomValue(curZoom)) * 1;
    this.setZoom("zoom_value", JSON.stringify(zoom_value));
    this.zoomNow(zoom_value);
  },
  zoom: function(behavior, isDefault) {
    var isReadyZoom = false, Gfire, Ffire, rkey = /^(?:(\-)|(\+))/,
      rkcode = /^10(?:(9)|(7))$/, combine, code, zooming=false,
      parser = {9: "-", 7: "+"}, clouser = this;

    var defaultZoom = {zoom: settings.editorSetup["editor.zoomValue"]};
    var zoomData = sessionStorage.getItem("zoom_value");
    zoomData = zoomData && JSON.parse(zoomData) || defaultZoom;

    if (behavior || isDefault) {
      if (isDefault &&
        zoomData['zoom']===100) {
        return;
      }
      if (isDefault) {
        zoomData['zoom']=100;
        this.setZoom('zoom_value', JSON.stringify(zoomData));
        this.zoomNow(zoomData);
        return;
      } else {
        this.zoomSetup(zoomData, behavior);
      }
      return;
    }

    this.zoomNow(zoomData);
    $(document).on("keyup visibilitychange", function() {
      isReadyZoom=false;
      zooming=false;
      window.activeZoom=false;
    });
    $(document).keydown(function(e) {
      Ffire = rkcode.exec(e.keyCode);
      Gfire = rkey.exec(e.key);
      combine =  Ffire || Gfire;
      combine = combine || [];
      isReadyZoom = (e.keyCode === 17 || e.ctrlKey === true);
      if (!isReadyZoom) return;
      code = combine[2] || combine[1];

      if (parser[code]||$.inArray(code, Object.values(parser))>=0) {
        if (window.dz) {
          zooming=false;
          window.activeZoom=false;
          isReadyZoom=false;
          window.dz=false;
          return;
        }
        e.stopPropagation();
        e.stopImmediatePropagation();
        code = parser[code] || code;
        zooming=true;
        window.activeZoom=true;
        clouser.zoomSetup(zoomData, code);
      }
      isReadyZoom && zooming && e.preventDefault();
    });
    document.addEventListener("wheel", function(e) {
      if (window.dz) {
        zooming=false;
        window.activeZoom=false;
        isReadyZoom=false;
        window.dz=false;
        return;
      }
      
      if (isReadyZoom) {
        window.activeZoom=true;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        zooming=true;
        clouser.zoomSetup(zoomData, e.wheelDelta < 0 ? '-' : '+');
      }
    }, {passive: false});
  }
};

export default SBLogic;