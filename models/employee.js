const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

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

////////////////////----- Export -----////////////////////

module.exports = mongoose.model("Employee", employeeSchema);
