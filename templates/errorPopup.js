function errorPopup(title, message) {
  return (
    `<span class="save-ask error-popup">
      <div class="container">
        <div class="popup-cover"></div>
        <div class="inner-content _3eetExy">
          <div class="alert _aceptpad">
            <div class="headalert">Notebook – ${title}</div>
            <div class="alert text">${message}</div>
          </div>
          <div class="act-buttons _aceptpad" style="justify-content:flex-end;">
            <button class="save revisible">OK</button>
          </div>
        </div>
      </div>
    </span>`
  );
}
export default errorPopup;