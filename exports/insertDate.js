import { setUndoAtClickHandler } from "./multiTaskHandler";
import { saveBackupUndoDataInLocalStorage } from "./undo";

function insertDate() {
  $(".time-date").click(function() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var Hour = date.getHours();
    var Minute = date.getMinutes();

    var fullDate = `${Hour}:${Minute} ${day}-${month}-${year}`;
    
    var undoText = setUndoAtClickHandler();
    document.execCommand("insertText", false, fullDate);
    saveBackupUndoDataInLocalStorage({data: [fullDate], undoText});
  });
}
export default insertDate;