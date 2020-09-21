const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const passportLocalMongoose = require("passport-local-mongoose");

////////////////////----- Employee Schema -----////////////////////

const employeeSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  contacts: Number,
  salary: {
    type: String,
    required: true
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }]
});

employeeSchema.plugin(passportLocalMongoose);

////////////////////----- Export -----////////////////////

module.exports = mongoose.model("Employee", employeeSchema);
