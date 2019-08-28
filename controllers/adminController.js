const db = require("../models");

// Defining methods for the adminController
module.exports = {
  // findAll: function(req, res) {
  //   db.Admin.find(req.query)
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
