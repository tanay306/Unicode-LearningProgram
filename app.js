const express = require("express");
const mongoose = require("mongoose");
var async = require('asyncawait/async');
var await = require('asyncawait/await');
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/bussinessDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

////////////////////----- Employee Schema -----////////////////////
const employeeSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true]
  },
  contacts: Number,
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

////////////////////----- Customer Schema -----////////////////////
const customerSchema = new mongoose.Schema({
    name : {
      type: String,
      required: [true]
    },
    contacts: Number,
    projects: [{
      type: String,
      ref: "Project"
    }]
});
const Customer = mongoose.model("Customer", customerSchema);

////////////////////----- Project Schema -----////////////////////
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

////////////////////----- Route for employees -----////////////////////

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

////////////////////----- Route for particular employee  -----////////////////////

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

////////////////////----- Route for customer -----////////////////////

app.route("/customer")
  .get(async function (req, res) {
    try {
      const customer = await Customer.find({});
      res.send(customer);
    }
    catch (err) {
      console.log(err);
    }
  })
  .post(async function (req, res) {
    try {
      const customer = await Customer.create(req.body);
      res.send(customer);
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

////////////////////----- Route for particular customer -----////////////////////

app.route("/customer/:customerId")
  .get(async function (req, res) {
    try {
      const customer = await Customer.findById(req.params.customerId);
      res.send(customer);
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
      const customer = await Customer.findByIdAndUpdate(
        req.params.customerId,
        {$set: req.body},
        {new: true}
      );
      res.send(customer);
    }
    catch (err) {
      console.log(err);
    }
  })
  .delete(async function (req, res) {
    try {
      const employee = await Customer.findByIdAndRemove(req.params.customerId);
      res.send("Customer successfully removed");
    }
    catch (err) {
      console.log(err);
    }
  });


////////////////////----- Server has started message -----////////////////////

app.listen(3000, function () {
  console.log("Server has statrted on port 3000");
});
