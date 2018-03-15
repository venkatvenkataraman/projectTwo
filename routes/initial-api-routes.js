var db = require("../models");

module.exports = function(app) {


  app.get("/api/gameInfo", function(req, res) {
    db.GameInfo.findAll({}).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.post("/api/gameInfo", function(req, res) {
    db.GameInfo.create(req.body).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.put("/api/gameInfo", function(req, res) {
    db.GameInfo.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbGame) {
        res.json(dbGame);
      });
  });

  app.delete("/api/gameInfo/:id", function(req, res) {
    db.GameInfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGame) {
      res.json(dbGame);
  });

});

};
