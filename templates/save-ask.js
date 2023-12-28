function saveAskPopup(filename) {
  return (
    `<span class="save-ask forced-alert">
      <div class="container">
        <div class="popup-cover"></div>
        <div class="inner-content _3eetExy">
          <div class="alert _aceptpad">
            <div class="headalert">Notebook</div>
            <div class="alert text">Do you want to save changes to ${filename}?</div>
          </div>
          <div class="act-buttons _aceptpad">
            <button class="save force-save">Save</button>
            <button class="exit-alert">Don't save</button>
            <button class="exit-alert">Cancel</button>
          </div>
        </div>
      </div>
    </span>`
  );
}
export default saveAskPopup;