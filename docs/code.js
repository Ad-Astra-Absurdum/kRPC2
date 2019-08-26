function load(id) {
  $("#" + id).load("code/codebox.html", function() {
    $("#" + id)
      .find("button")
      .each(function(index) {
        $(this).attr(
          "onClick",
          "loadLanguage('" + id + "', '" + this.id + "');"
        );
      });
  });
}

function loadLanguage(id, language) {
  $.get(
    "code/" + id + "/code." + language,
    function(data) {
      $("#" + id)
        .find("code")
        .text(function() {
          return data;
        });

      var code = document.querySelector("#" + id + " pre");
      $(code).removeClass("cs cpp java lua python py");
      $(code).addClass(language);
      hljs.highlightBlock(code);
    },
    "text"
  );
}
