(function () {
  "use strict";

  var config, body, testdiv;

  // config
  config = {
    expectCss: "http://lpender.github.io/program__sample-program/assets/application.css",
    jQueryJs: "https://code.jquery.com/jquery-2.1.3.min.js",
    scriptTimeout: 3000
  };

  function addDomStuff() {
    var html = $('body').html();
    var newHtml = "<div class='outer-container'>"
                  + "<div class='challenge-environment'>"
                  + html
                  + "</div></div>";

    $('body').html(newHtml);
  };

  function loadScript(url) {
    return new Promise(function(resolve, reject) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = url;

      script.onload = function() {
        resolve();
      };

      document.getElementsByTagName("head")[0].appendChild(script);
    });
  };

  function loadStylesheet(url) {
    var link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    link.type = "text/css";

    document.getElementsByTagName("head")[0].appendChild(link);
  };

  function loadScripts(urls, callback) {
    var promises = [];

    urls.forEach(function(url) {
      promises.push(loadScript(url));
    });

    Promise.all(promises).then(function () {
      callback();
    });
  };

  loadStylesheet(config.expectCss);
  loadScripts([config.jQueryJs], addDomStuff);

})();
