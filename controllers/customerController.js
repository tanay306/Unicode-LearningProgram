const express = require("express");
const Customer = require("../models/customer");

const customerGet = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === "admin") {
      const customer = await Customer.find({});
      res.send(customer);
    } else {
      res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

const customerPost = async (req, res) =>{
  try {
    if (req.isAuthenticated() && req.user.role === "admin") {
      const customer = await Customer.create(req.body);
      res.send(customer);
    } else {
      res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

const customerPut =async (req, res) => {
  res.send("Put function is not permitted for this route");
};

const customerDelete = async (req, res) => {
  res.send("Delete function is not permitted for this route");
};

const particularCustGet = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role !== "employee") {
      const customer = await Customer.findById(req.params.customerId);
      res.send(customer);
    } else {
      res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

const particularCustPost = async (req, res) => {
  res.send("Post function is not permitted for this route");
};

const particularCustPut = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role !== "employee") {
      const customer = await Customer.findByIdAndUpdate(req.params.customerId, {$set: req.body}, {new: true});
      res.send(customer);
    } else {
      res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

const particularCustDelete = async (req, res) => {
  try {
    if (req.isAuthenticated() && req.user.role === "admin") {
      const customer = await Customer.findByIdAndRemove(req.params.customerId);
      res.send("Customer successfully removed");
    } else {
        res.send("Restricted access");
    }
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = {
  customerGet,
  customerPut,
  customerPost,
  customerDelete,
  particularCustGet,
  particularCustPut,
  particularCustPost,
  particularCustDelete
};
