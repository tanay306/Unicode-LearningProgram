const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const passportLocalMongoose = require('passport-local-mongoose');

////////////////////----- User Schema -----////////////////////

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose);

////////////////////----- Export -----////////////////////

module.exports = mongoose.model('User', userSchema);
