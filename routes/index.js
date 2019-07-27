var db = require("../models");
var passport = require("passport")

module.exports = function (app) {

  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/admin',
      failureRedirect: '/login',
      failureFlash: true
    })
  );0

}