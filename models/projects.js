const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

////////////////////----- Project Schema -----////////////////////

const projectSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  customer: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  }],
  employee: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee"
  }],
  startDate: {
    type: [Date],
    required: true
  }
});

////////////////////----- Export -----////////////////////

module.exports = mongoose.model("Project", projectSchema);
