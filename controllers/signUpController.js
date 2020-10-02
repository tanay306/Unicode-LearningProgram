const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('../models/user');

const signUpGet = (req, res) => {
  if (req.isAuthenticated()) {
    res.send('User is authenicated');
  } else {
    res.send('User is not authenticated');
  }
};

const signUpPost = (req, res) => {
  if (req.isAuthenticated()) {
    res.send('User ' + req.user.username + ' is already logged in');
  } else {
    User.register(
      { username: req.body.username, role: req.body.role },
      req.body.password,
      (err, user) => {
        if (err) {
          res.send('User not registered');
          console.log(err);
        } else {
          passport.authenticate('local')(req, res, () => {
            res.send('User registered');
          });
        }
      }
    );
  }
};

const signUpPut = (req, res) => {
  res.send('Put function is not permitted for this route');
};

const signUpDelete = (req, res) => {
  res.send('Delete function is not permitted for this route');
};

module.exports = {
  signUpGet,
  signUpPost,
  signUpPut,
  signUpDelete,
};
