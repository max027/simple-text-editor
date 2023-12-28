import { importPageData } from "../import/preveiw";
import { fetchContent } from "../import/preveiw";
import render from "../import/render";
import fetchingPopup from "../templates/fetchingPopup";

function formData(file, filename) {
  var form = document.createElement("form");
  var request = document.createElement("input");
  var filename = request.cloneNode(true);
  var fileElem = request.cloneNode(true);
  fileElem.type='file';
  fileElem.name='file';
  fileElem.files = file;
  request.value='POST';
  request.name='request';
  filename.name='filename';
  filename.value=filename;
  $(form).append([request, filename, fileElem]);
  return new FormData(form);
}
function fopener() {
  $("#fopener").on("change", function(e) {
    render.rendWithArgs(fetchingPopup, "Fetching data");
    var file = e.target.files;
    var filename = file[0]['name'];
    filename = filename.split('.');
    filename.pop();
    fetchContent('POST', null,
      formData(file, filename), function(response) {
        importPageData(response);
        $(".fetching-popup").remove();
        /* clear Undo data when open new file data */
        window.sessionStorage.removeItem("undoBackup");
        $("#fopener").val("");
    });
  });
}
export default fopener;