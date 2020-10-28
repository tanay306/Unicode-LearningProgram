const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('../models/user');

const signOutGet = (req, res) => {
  req.logout();
  res.send('Successfully logged out');
};

const signOutPost = (req, res) => {
  res.statusCode = 403;
  res.send('Post function is not permitted for this route');
};

const signOutPut = (req, res) => {
  res.statusCode = 403;
  res.send('Put function is not permitted for this route');
};

const signOutDelete = (req, res) => {
  res.statusCode = 403;
  res.send('Delete function is not permitted for this route');
};

module.exports = {
  signOutGet,
  signOutPost,
  signOutPut,
  signOutDelete,
};
