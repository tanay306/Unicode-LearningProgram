const express = require("express");
const mongoose = require("mongoose");
var async = require('asyncawait/async');
var await = require('asyncawait/await');
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/bussinessDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const employeeSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true]
  },
  contacts: [Number],
  salary: {
    type: String,
    required: [true]
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  }]
});
const Employee = mongoose.model("Employee", employeeSchema);

const customerSchema = new mongoose.Schema({
    name : {
      type: String,
      required: [true]
    },
    contacts: [Number],
    projects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    }]
});
const Customer = mongoose.model("Customer", customerSchema);

const projectSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true]
  },
  customer: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: [true]
  }],
  employee: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee"
  }],
  startDate: {
    type: [Date],
    required: [true]
  }
});
const Project = mongoose.model("Project", projectSchema);

app.route("/employee")
  .get(async function (req, res) {
    try {
      const employee = await Employee.find({});
      res.send(employee);
    }
    catch (err) {
      console.log(err);
    }
  })
  .post(async function (req, res) {
    try {
      const employee = await Employee.create(req.body);
      res.send(employee);
    }
    catch (err) {
      console.log(err);
    }
  })
  .put(async function (req, res) {
    res.send("Put function is not permitted for this route");
  })
  .delete(async function (req, res) {
    res.send("Delete function is not permitted for this route")
  });

app.route("/employee/:employeeId")
  .get(async function (req, res) {
    try {
      const employee = await Employee.findById(req.params.employeeId);
      res.send(employee);
    }
    catch (err) {
      console.log(err);
    }
  })
  .post(async function (req, res) {
    res.send("Post function is not permitted for this route")
  })
  .put(async function (req, res) {
    try {
      const employee = await Employee.findByIdAndUpdate(
        req.params.employeeId,
        {$set: req.body},
        {new: true}
      );
      res.send(employee);
    }
    catch (err) {
      console.log(err);
    }
  })
  .delete(async function (req, res) {
    try {
      const employee = await Employee.findByIdAndRemove(req.params.employeeId);
      res.send("Employee successfully removed");
    }
    catch (err) {
      console.log(err);
    }
  });




app.listen(3000, function () {
  console.log("Server has statrted on port 3000");
});
