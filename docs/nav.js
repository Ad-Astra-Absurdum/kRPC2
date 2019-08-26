$("nav").load("/nav.html", function() {
  var path = window.location.pathname
    .replace("/pages", "")
    .replace(".html", "")
    .replace("index", "")
    .replace("/", "-");

  if (path[path.length - 1] == "/") {
    path = path.substring(0, path.length - 1);
  }

  console.log(path);
  $("nav")
    .find("#" + path)
    .addClass("active");
});
