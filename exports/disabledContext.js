export default function disabledContext() {
  $(document).on("contextmenu", function(e) {
    e.preventDefault();
  });
}