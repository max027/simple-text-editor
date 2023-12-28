function fetchingPopup(message) {
  return (
    `<span class="alert-popup fetching-popup popup-x">
      <div class="container">
        <div class="popup-cover"></div>
        <div class="inner-content _xe3F _3eetExy">
          <div class="fetching">
            <div class="blinker"></div>
            <div class="_xetlern">${message}...</div>
          </div>
        </div>
      </div>
    </span>`
  );
}
export default fetchingPopup;