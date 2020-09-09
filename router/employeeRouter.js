const express = require("express");
const Employee = require("../models/employee");
const employeeRouter = express.Router();

////////////////////----- Route for employees -----////////////////////

employeeRouter.route("/")
  .get(async (req, res) =>  {
    try {
      const employee = await Employee.find({});
      res.send(employee);
    }
    catch (err) {
      console.log(err);
    }
  })
   .post(async (req, res) =>  {
    try {
      const employee = await Employee.create(req.body);
      res.send(employee);
    }
    catch (err) {
      console.log(err);
    }
  })
  .put(async (req, res) => {
    res.send("Put function is not permitted for this route");
  })
  .delete(async (req, res) => {
    res.send("Delete function is not permitted for this route")
  });

////////////////////----- Route for particular employee  -----////////////////////

employeeRouter.route("/:employeeId")
  .get(async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.employeeId);
      res.send(employee);
    }
    catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    res.send("Post function is not permitted for this route")
  })
  .put(async (req, res) => {
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
  .delete(async (req, res) => {
    try {
      const employee = await Employee.findByIdAndRemove(req.params.employeeId);
      res.send("Employee successfully removed");
    }
    catch (err) {
      console.log(err);
    }
  });

////////////////////----- Export  -----////////////////////

module.exports = employeeRouter;
