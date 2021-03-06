var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

const User = require('../models/user');

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

// Exporting our configured passport
module.exports = passport;