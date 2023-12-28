import statusBarToggle from "../templates/statusbarToggle";
import render from "../import/render";

function toggleStatusBar() {
  $(".show-hide-status-bar").click(function() {
    var checkbox = $("#b_statusbar")[0];
    $(".set-status-bar label").click();
    $(".alert-status-bar").remove();
    checkbox.checked ? (checkbox.checked=false) : (checkbox.checked=true);
  });
}

export default function contextStatusBar() {
  $(".status-bar").on("contextmenu", function(e) {
    $(".alert-status-bar").remove();
    render(statusBarToggle).runScript(toggleStatusBar);

    var toggleWidth = $(".alert-status-bar").outerWidth();

    var clientX = e.clientX;
    var statusWidth = $(this).outerWidth();

    var valign = clientX + toggleWidth;

    var verticalAlign = {};

    valign < statusWidth ? (verticalAlign["left"]=clientX) : (verticalAlign["right"]=statusWidth - clientX);

    if ("right" in verticalAlign) {
      verticalAlign["right"] += $(".sideboundry").outerWidth();
    }

    $(".alert-status-bar").css(verticalAlign);
    $("#b_statusbar")[0].checked=$("#statusBar")[0].checked;
  });
}