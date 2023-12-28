import settings from './settings';

function showHideFileType() {
  const fTypeElem = `<span class="extension"></span>`;
  settings.editorSetup["editor.fileType"]=='on' ?
    $(".active-filetype").html(fTypeElem) : $(".active-filetype").empty();
}

function includeStatusBar() {
  return (
    `<div class="status-bar">
      <div class="__nblsboption">
        <div class="network-status" style="display:flex;color:#fff;">
          <i style="width:15px;height:15px;cursor:default;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rss"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>
            </svg>
          </i>
        </div>
      </div>
      <div class="__nbrsboption __flexFprop">
        <div class="ln-col">
          <span>Ln:&nbsp;<span class="ln"></span></span>
          <span>Col:&nbsp;<span class="col">20</span></span>
        </div>
        <div class="space-counter">
          <span>Spaces:&nbsp;<span class="spaces"></span></span>
        </div>
        <div class="zoom-percent"><span class="zoom">100%</span></div>
        <div class="CRLF"><span>Notebook (CRLF)</span></div>
        <div class="active-filetype"></div>
        <div class="charset"><span>${settings.editorSetup["editor.charset"]}</span></div>
      </div>
    </div>`
  );
}

export { showHideFileType };
export default includeStatusBar;