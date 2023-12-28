function networkStatus(event) {
  $(".network-status i").removeClass("online offline");
  $(".network-status i").addClass(event.type);
}
function onlineOffline() {
  navigator.onLine ?
  networkStatus({type: 'online'}) :
  networkStatus({type: 'offline'});
  $(window).on("online offline", networkStatus);
}
export default onlineOffline;