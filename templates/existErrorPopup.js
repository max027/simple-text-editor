function existsErrorPopup(filename) {
  return (
    `<span class="save-ask error-popup">
      <div class="container">
        <div class="popup-cover"></div>
        <div class="inner-content _3eetExy" style="max-width:380px;width:100%;">
          <div class="alert _aceptpad">
            <div class="headalert">Notebook</div>
            <div class="alert text">Can't save file "${filename}" already exists.</div>
          </div>
          <div class="act-buttons _aceptpad" style="justify-content:flex-end;">
            <button class="btn-ok">Cancel</button>
          </div>
        </div>
      </div>
    </span>`
  );
}
export default existsErrorPopup;