function xhrSend(senderData, callback) {
  $.ajax({
    url: '/models/13a4a11319d31c1b323d5774f44240a9ffc984d0',
    type: 'POST',
    data: senderData,
    error: function(_jqxhr, error) {
      if (error==='error'&&!navigator.onLine) {
        var i=0;
        function autoFetch() {
          i++;
          i>=700 ? xhrSend(senderData, callback) : window.requestAnimationFrame(autoFetch);
        }
        autoFetch();
        return;
      }
      callback.call(this, error);
    },
    success: function(response, status) {
      callback.call(this, response, status, senderData);
    }
  });
}
export default xhrSend;