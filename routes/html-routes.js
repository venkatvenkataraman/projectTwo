<<<<<<< HEAD
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
=======
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
>>>>>>> 03a69b95a44272d3d5c2846ab7737f47b59f763f
