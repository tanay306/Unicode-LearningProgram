const express = require("express");
const Customer = require("../models/customer");
const customerRouter = express.Router();



////////////////////----- Route for customer -----////////////////////

customerRouter.route("/")
  .get(async (req, res) => {
    try {
      const customer = await Customer.find({});
      res.send(customer);
    }
    catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    try {
      const customer = await Customer.create(req.body);
      res.send(customer);
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

////////////////////----- Route for particular customer -----////////////////////

customerRouter.route("/:customerId")
  .get(async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.customerId);
      res.send(customer);
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
      const customer = await Customer.findByIdAndUpdate(req.params.customerId, {$set: req.body}, {new: true});
      res.send(customer);
    }
    catch (err) {
      console.log(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const employee = await Customer.findByIdAndRemove(req.params.customerId);
      res.send("Customer successfully removed");
    }
    catch (err) {
      console.log(err);
    }
  });

////////////////////----- Export -----////////////////////

module.exports = customerRouter;
