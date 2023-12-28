import { configurationSettingSetup } from "../exports/settings_setup";
import serverState from "../exports/serverState";
import colorTheme from "../exports/colorTheme";
import settings from "../import/settings";
import { setColorTheme } from "../import/NBSinit";
import { adjustCounter } from "../import/line-increament";
import { originalSettings } from "../import/settings";
import { setSetting } from "../components/initializeSettings";

export default function server(data) {
  serverState['status']!=='pending' && ajaxSend(data, resolved, rejected);
}
function ajaxSend(data, resolved, rejected) {
  return $.ajax({
    url: "/models/3de4f901fffb30ac720b0e7eb654b4faa2dd03fa",
    type: 'POST',
    data: data,
    error: function(_jqxhr, error) {
      rejected.call(this, _jqxhr, data, error);
    },
    success: function(response, status) {
      resolved.call(this, response, data, status);
    },
  });
}
function resolved(response, cssData, status) {
  if (response.status===status && !response.contentLength) {
    if (!cssData["editor.statusBar"]) {
      $.each(cssData, function(editorproperty, editorvalue) {
        if (settings.cssSetup[editorproperty]) {
          originalSettings[editorproperty]=editorvalue;
          if (editorproperty=="editor.fontSize") {
            editorvalue = editorvalue + 'px';
          }
          setSetting(editorproperty, editorvalue);
        } else {
          setColorTheme(editorvalue, colorTheme);
          originalSettings[editorproperty]=editorvalue;
        }
      });
      adjustCounter( true );
      configurationSettingSetup.App_theme();
      configurationSettingSetup.Word_wrap();
    }
  }
}
function rejected(_jqxhr, data, error) {
  if (error==='error'&&!navigator.onLine) {
    var duration=0;
    function scheudle() {
      serverState['status']='pending';
      duration++;
      duration >= 700 &&
      (serverState['status']='rejected');
      duration >= 700 ? ajaxSend(data, resolved, rejected) : window.requestAnimationFrame(scheudle);
    }
    scheudle();
  }
}