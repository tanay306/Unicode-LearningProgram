const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const passportLocalMongoose = require('passport-local-mongoose');

////////////////////----- Customer Schema -----////////////////////

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contacts: Number,
  projects: [
    {
      type: String,
      ref: 'Project',
    },
  ],
});

customerSchema.plugin(passportLocalMongoose);

////////////////////----- Export -----////////////////////

module.exports = mongoose.model('Customer', customerSchema);
