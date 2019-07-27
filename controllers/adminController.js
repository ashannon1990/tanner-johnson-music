const db = require("../models");

// Defining methods for the adminController
module.exports = {
  findAll: function(req, res) {
    db.Admin.find(req.query)
      .then(dbAdmin => res.json(dbAdmin))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Admin.findById(req.params.id)
      .then(dbAdmin => res.json(dbAdmin))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Admin.create(req.body)
      .then(dbAdmin => res.json(dbAdmin))
      .catch(err => res.status(422).json(err));
  },
//   update: function(req, res) {
//     db.Admin.findOneAndUpdate({ id: req.params.id }, req.body)
//       .then(dbAdmin => res.json(dbAdmin))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Admin.findById(req.params.id)
//       .then(dbAdmin => dbAdmin.remove())
//       .then(dbAdmin => res.json(dbAdmin))
//       .catch(err => res.status(422).json(err));
//   }
};
