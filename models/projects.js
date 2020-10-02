const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const passportLocalMongoose = require('passport-local-mongoose');

////////////////////----- Project Schema -----////////////////////

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  customer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
  ],
  employee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
    },
  ],
  startDate: {
    type: [Date],
    required: true,
  },
});

projectSchema.plugin(passportLocalMongoose);

////////////////////----- Export -----////////////////////

module.exports = mongoose.model('Project', projectSchema);
