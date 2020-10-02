const express = require('express');
const session = require('express-session');
const passport = require('passport');
const User = require('../models/user');

/////--passport serialize and deserialize user--/////

module.exports = (passport) => {
  passport.use(User.createStrategy());
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
