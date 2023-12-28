import { createData } from "../components/save";
import includeFile from "./includeFile";
function saveAsPopup() {
  const datasource = createData();
  return (
    `<span class="save-ask save-as-popup">
      <div class="container">
        <div class="popup-cover"></div>
        <div class="save-location">
          <div class="rprefixes">
            <div class="locatenav">
              <div class="back-arrow">
                <div class="back-setting" onclick="$('.save-ask').remove();">
                  <i style="width:22px;height:22px;background-image:var(--notebook-toleft-arrow);background-repeat:no-repeat;background-position:center;background-size:100%;"></i>
                </div>
              </div>
              <div class="saveastext" style="flex-grow:1;">Save as</div>
              <div class="close-popup" onclick="$('.save-ask').remove();">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
            </div>
            <div class="location-area">
              <div class="duo-grid">
                <div class="sidebar">
                  <div style="margin-top:22px;font-size:12px;color:var(--notebook-subx-textcolor);">File Location</div>
                  <div class="locater">
                    <div class="folder-icon">
                      <svg fill="#cfcf36" width="16" height="16" viewBox="0 0 32 32">
                        <path d="M14 4l4 4h14v22h-32v-26z"/>
                      </svg>
                    </div>
                    <div class="tmp">tmp</div>
                  </div>
                </div>
                <div class="primarybar">
                  <div class="topbar">
                    <div class="folder-icon tmp">
                      <svg fill="#cfcf36" width="16" height="16" viewBox="0 0 32 32">
                        <path d="M14 4l4 4h14v22h-32v-26z"/>
                      </svg>
                    </div>
                    <div style="display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:13.333px;">&nbsp;&nbsp;${$("body").attr("data-root-dir")}\\tmp\\${datasource.fileExists ? datasource.fileName : ""}</div>
                  </div>
                  ${datasource.fileExists ? includeFile(datasource.fileName) : ""}
                </div>
              </div>
              <div class="bottombar">
                <div class="file-input">
                  <form action="/models/13a4a11319d31c1b323d5774f44240a9ffc984d0" method="post" id="saveAsForm">
                    <div class="field">
                      <label for="filename">File <u>n</u>ame:</label>
                      <div class="_2FexyReE">
                        <input type="text" onfocus="$('#recentToggle')[0].checked=false;" name="file-name" autocomplete="off" id="filename"
                          value="${datasource.fileExists ? datasource.fileName : "Untitled"}" focus="1">
                        <input type="checkbox" id="recentToggle" hidden>
                        <div class="recentfile saveas-toggle">
                          <div class="rtoggle"></div>
                        </div>
                        <label for="recentToggle" class="fas-cheverone">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                        </label>
                      </div>
                    </div>
                    <div class="field">
                      <label for="filetype">Save as <u>t</u>ype:</label>
                      <div class="_2FexyReE">
                        <label class="seprate" for="chooseType"><input type="text" name="file-type" autocomplete="off" id="filetype" value="Text documents (*.txt)" style="cursor:pointer;" readonly></label>
                        <input type="checkbox" id="chooseType" hidden>
                        <div class="saveas-toggle">
                          <div class="rtoggle">
                            <input type="hidden" id="XFT" value="txt" name="xhr-file-type"/>
                            <div class="ftype" data-sender="txt" data-value="Text documents (*.txt)" data-id="#filetype">Text documents (*.txt)</div>
                            <div class="ftype" data-sender="all" data-value="All files" data-id="#filetype">All files</div>
                          </div>
                        </div>
                        <label for="chooseType" class="fas-cheverone">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                        </label>
                      </div>
                    </div>
                    <div class="trigger">
                      <div class="encoder">Encoding: <div>${datasource.charset}</div></div>
                      <button type="submit" id="saveAsFileButton"><u>S</u>ave</button>
                      <button type="button" onclick="$('.save-ask').remove();">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>`
  );
}
export default saveAsPopup;