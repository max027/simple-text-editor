import insertLine from "./insertLine";

function previewPageContent() {
  fetchContent('GET', null, null, function(response) {
    importPageData(response);
  });
}
function importPageData(response) {
  $("body")
    .attr("data-file-content", response.content.join("\n").length);
  document.title = "Notebook – " + response.filename;
  $(".extension").text(response.extension);
  $("body").attr("data-file-exists", true);
  $("body").attr("data-file-opened", response.filename);
  window.activeFile=true;
  $(".line:first").empty();
  $(".line:gt(0)").remove();
  insertLine(response.content);
  $("body").attr("data-file-type", response.extension);
  const exts = window.localStorage.getItem("extension");
  if (!exts && exts!==response.extension) {
    window.localStorage.setItem("extension", response.extension);
  }
}
function fetchContent(method, filename, data, callback) {
  var ajaxSettings = {
    url: '/plugins/pageinfo.php',
    dataType: 'json',
    type: 'POST',
    data: {request: method, data, filename},
    error: function(jqxhr) {
      var response = jqxhr.responseText;
      try {
        response = JSON.parse(response);
      }
      catch(e) {};
      if (typeof response === "object") {
        callback.call(this, response);
        $(".fetching-popup").remove();
        return;
      }

      response = response.split("\n");
      const extension = response.shift();
      const filename = response.shift();
      if (response.length) {
        $("body").attr("data-file-exists", true);
        $("body").attr("data-file-content", response.join("\n").length);
        callback.call(this, {content: response, filename: filename, extension: extension});
        $(".fetching-popup").remove();
      }
    },
    success: function(response, status) {
      $(".extension").text('txt'),
      $("body")
        .attr("data-file-exists", false)
        .attr("data-file-content", 0)
        .attr("data-file-type", "txt");
      if ($.isEmptyObject(response)) {
        $(".preloader").remove();
        window.activeFile=false;
        $(".fetching-popup").remove();
        return;
      }
      callback.call(this, response, status);
    }
  };
  if (method==='POST') {
    $.extend(ajaxSettings, {
      contentType: false,
      processData: false
    });
    ajaxSettings['data']=data;
  }
  $.ajax(ajaxSettings);
}

export default previewPageContent;
export { importPageData, fetchContent };