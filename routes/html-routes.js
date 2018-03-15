var path = require("path");

module.exports = function(app) {

  // index route loads initial.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/initial.html"));
  });

  // game route loads game.html
  app.get("/game", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/game.html"));
  });

}
