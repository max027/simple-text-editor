function gotoPopup() {
  return (
    `<span class="save-ask bgoto-popup">
      <div class="container">
        <div class="popup-cover"></div>
        <div class="inner-content _3eetExy">
          <div class="alert _aceptpad">
            <div class="headalert">Go to line</div>
            <div class="alert text">Line number</div>
            <div style="margin-top:8px;position:relative;">
              <input type="text" style="width:333px;" id="_xrhtInx" class="goto-input" autocomplete="off">
              <div class="fas-close" onclick="$('.goto-input').val('').focus();">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
            </div>
          </div>
          <div class="act-buttons _aceptpad">
            <button class="save goto-button">Go to</button>
            <button class="gp-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </span>`
  );
}
export default gotoPopup;