function clearUndoDataOnRefresh() {
  window.sessionStorage.removeItem("undoBackup");
}
export default clearUndoDataOnRefresh;