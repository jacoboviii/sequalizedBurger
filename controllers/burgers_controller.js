const db = require("../models");

module.exports = function (app) {
  
  // GET route for getting all of the burgers
  app.get("/", function (req, res) {
    // Add sequelize code to find all burgers, and return them to the user with res.render
    db.Burger.findAll({}).then(function (dbBurgers) {
      let hbsObject = {
        burgers: dbBurgers
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

   // POST route for saving a new burger
   app.post("/api/burgers", function (req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Burger.create(req.body).then(function (dbBurger) {
      console.log(dbBurger);
      res.end();
    });
  });

  // PUT route for updating burgers
  app.put("/api/burgers/:id", function (req, res) {
    // Add code here to update a burger using the values in req.body, where the id is equal to
    // req.params.id and return the result to the user using res.json
    db.Burger.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function () {
        res.status(200).end();
      });
  });
}