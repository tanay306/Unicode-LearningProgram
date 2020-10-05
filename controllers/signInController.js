const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('../models/user');
const ejs = require('ejs');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const signInGet = (req, res) => {
  // res.send('Get function is not permitted for this route');
  res.render('signIn');
};

const signInPost = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate('local')(req, res, function () {
        res.send('Successfully logged in');
      });
    }
  });
};

const signInPut = (req, res) => {
  res.send('Put function is not permitted for this route');
};

const signInDelete = (req, res) => {
  res.send('Delete function is not permitted for this route');
};

module.exports = {
  signInGet,
  signInPost,
  signInPut,
  signInDelete,
};
