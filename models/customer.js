const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

////////////////////----- Customer Schema -----////////////////////

const customerSchema = new mongoose.Schema({
    name : {
      type: String,
      required: true
    },
    contacts: Number,
    projects: [{
      type: String,
      ref: "Project"
    }]
});

////////////////////----- Export -----////////////////////

module.exports = mongoose.model("Customer", customerSchema);
