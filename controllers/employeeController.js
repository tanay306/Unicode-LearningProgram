const express = require("express");
const Employee = require("../models/employee");

const employeeGet = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === "admin"){
      const employee = await Employee.find({});
      res.send(employee);
    } else {
      res.send("Restricted access");
    }

  }
  catch (err) {
    console.log(err);
  }
};

const employeePut = async (req, res) => {
  res.send("Put function is not permitted for this route");
};

const employeePost = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === "admin") {
      const employee = await Employee.create(req.body);
      res.send(employee);
    } else {
      res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

const employeeDelete = async (req, res) => {
  res.send("Delete function is not permitted for this route");
};

const particularEmpGet = async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const employee = await Employee.findById(req.params.employeeId);
      res.send(employee);
    } else {
      res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

const particularEmpPost = async (req, res) => {
  res.send("Post function is not permitted for this route")
};

const particularEmpPut = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role !== "customer") {
      const employee = await Employee.findByIdAndUpdate(
        req.params.employeeId,
        {$set: req.body},
        {new: true}
      );
      res.send(employee);
    } else {
      res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

const particularEmpDelete = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === "admin") {
      const employee = await Employee.findByIdAndRemove(req.params.employeeId);
      res.send("Employee successfully removed");
    } else {
      res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = {
  employeeGet,
  employeePut,
  employeePost,
  employeeDelete,
  particularEmpGet,
  particularEmpPut,
  particularEmpPost,
  particularEmpDelete
};
