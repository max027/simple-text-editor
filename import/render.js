function render() {
  if (!(this instanceof render)) {
    return new render(arguments);
  }

  $.each(arguments[0], function(_i, render_value) {
    const selector = render_value.render || "#content";
    const html = render_value.html || render_value;
    const render_data = $.isFunction(html) ? html() : html;
    $(selector).append(render_data);
  });
}
render.prototype.execute = function() {
  $.each(arguments, function(_i, Function) {
    window.setTimeout(function() {
      $.isFunction(Function) && Function();
    }, 1000);
  });
};

render.prototype.constructor = render;

render.prototype.runScript = function(callback) {
  $.isFunction(callback) && callback();
}

render.rendWithArgs = function(renderFn, args) {
  var args = Array.from(arguments);
  args.shift();
  $("#content").prepend(renderFn.apply(this, args));
};
export default render;