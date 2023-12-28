function structure() {
  return (
    `<div class="sideboundry"></div>
    <span><input type="file" id="fopener" name="file" accept=".txt" hidden /></span>
    <div class="editor-content">
      <section>
        <nav class="__primary-navbar">
          <ul class="primlist-ui">
            <li>
              <div style="display:flex">
                <i style="width:20px;height:20px;background-repeat:no-repeat;background-size:100%;background-position:center;" class="editorlogo"></i>
              </div>
            </li>
            <li class="list-opt file-opt">
              <label for="File"><div class="__notebook-option fo" tabindex="1">File</div></label>
              <input type="checkbox" name="ctrltogglenav" id="File" class="btoggle">
              <div class="__notebook-toggle">
                <div class="__toggle-content" style="margin-left:1px;">
                  <ul>
                    <li class="new-tab"><div class="__toggle-option">New tab</div><div class="shortcut">Ctrl+N</div></li>
                    <li class="new-window"><div class="__toggle-option">New window</div><div class="shortcut">Ctrl+Shift+N</div></li>
                    <li><label for="fopener" class="opener"><div class="__toggle-option">Open</div><div class="shortcut">Ctrl+O</div></label></li>
                    <li class="s-save"><div class="__toggle-option">Save</div><div class="shortcut">Ctrl+S</div></li>
                    <li class="s-save-as"><div class="__toggle-option">Save as</div><div class="shortcut">Ctrl+Shift+S</div></li>
                    <li><div class="__toggle-option">Save all</div><div class="shortcut">Ctrl+Alt+S</div></li>
                  </ul>
                  <ul>
                    <li class="print"><div class="__toggle-option">Page setup</div></li>
                    <li class="print"><div class="__toggle-option">Print</div><div class="shortcut">Ctrl+P</div></li>
                  </ul>
                  <ul>
                    <li class="download disabled"><div class="__toggle-option">Download file</div><div class="shortcut">Ctrl+D</div></li>
                    <li class="clear-win disabled"><div class="__toggle-option">Clear window</div><div class="shortcut">Ctrl+Win</div></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="list-opt s-edit">
              <label for="Edit"><div class="__notebook-option _2ndlist" tabindex="2">Edit</div></label>
              <input type="checkbox" name="ctrltogglenav" id="Edit" class="btoggle">
              <div class="__notebook-toggle">
                <div class="__toggle-content">
                  <ul>
                    <li class="undo f2ctor disabled"><div class="__toggle-option">Undo</div><div class="shortcut">Ctrl+Z</div></li>
                  </ul>
                  <ul>
                    <li data-exec-command="cut" class="cut fcli f2ctor _estimate disabled"><div class="__toggle-option">Cut</div><div class="shortcut">Ctrl+X</div></li>
                    <li data-exec-command="copy" class="copy fcli f2ctor _estimate disabled"><div class="__toggle-option">Copy</div><div class="shortcut">Ctrl+C</div></li>
                    <li class="paste f2ctor disabled"><div class="__toggle-option">Paste</div><div class="shortcut">Ctrl+V</div></li>
                    <li data-exec-command="delete" class="del fcli f2ctor _estimate disabled"><div class="__toggle-option">Delete</div><div class="shortcut">Del</div></li>
                  </ul>
                  <ul>
                    <li class="find f2ctor disabled"><div class="__toggle-option">Find</div><div class="shortcut">Ctrl+F</div></li>
                    <li class="find-next f2ctor disabled" data-action="next"><div class="__toggle-option">Find next</div><div class="shortcut">F3</div></li>
                    <li class="find-prev f2ctor disabled" data-action="prev"><div class="__toggle-option">Find previous</div><div class="shortcut">Shift+F3</div></li>
                    <li class="replace f2ctor disabled"><div class="__toggle-option">Replace</div><div class="shortcut">Ctrl+H</div></li>
                    <li class="goto"><div class="__toggle-option">Goto</div><div class="shortcut">Ctrl+G</div></li>
                  </ul>
                  <ul>
                    <li class="select-all"><div class="__toggle-option">Select all</div><div class="shortcut">Ctrl+A</div></li>
                    <li class="time-date"><div class="__toggle-option">Time/Date</div><div class="shortcut">F5</div></li>
                  </ul>
                  <ul>
                    <li><div class="__toggle-option _nb-setting">Font</div></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="list-opt">
              <label for="View"><div class="__notebook-option" tabindex="3">View</div></label>
              <input type="checkbox" name="ctrltogglenav" class="btoggle" id="View">
              <div class="__notebook-toggle">
                <div class="__toggle-content">
                  <ul>
                    <li class="zoom">
                      <div class="nbcheck"></div>
                      <div class="__toggle-option">Zoom</div>
                      <div class="nb-cheverone">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </div>
                    </li>
                    <li class="set-status-bar" data-set="status-bar">
                      <label for="statusBar" class="dflex _nbview">
                        <input type="checkbox" id="statusBar">
                        <div class="nbcheck">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <div class="__toggle-option">Status bar</div>
                      </label>
                    </li>
                    <li class="set-word-wrap" data-set="word-wrap">
                      <label for="wordWrap" class="dflex _nbview">
                        <input type="checkbox" name="word-wrap" id="wordWrap">
                        <div class="nbcheck">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <div class="__toggle-option">Word wrap</div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="__notebook-toggle secondry-toggle">
                <div class="__toggle-content" style="width:230px;">
                  <ul>
                    <li class="cto-zoom" data-zoom="+"><div class="__toggle-option">Zoom in</div><div class="shortcut">Ctrl+Plus</div></li>
                    <li class="cto-zoom" data-zoom="-"><div class="__toggle-option">Zoom out</div><div class="shortcut">Ctrl+Minus</div></li>
                    <li class="default-zoom"><div class="__toggle-option">Restore default zoom</div><div class="shortcut">Ctrl+0</div></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div class="__nbsettings">
            <div class="settings _nb-setting">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
          </div>
        </nav>
      </section>
      <div class="__editorwindow">
        <div class="editor"></div>
        <div class="__notebook-editor-wrap">
          <div class="line-increament">
            <div class="counters"></div>
          </div>
          <div
            class="writable-area def"
            translate="no"
            contenteditable="true"
            spellcheck="false"
            autofocus="1"><div class="line" translate="no"></div></div>
        </div>
      </div>
    </div>`
  );
}
export default structure;