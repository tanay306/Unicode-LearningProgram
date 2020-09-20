const express = require("express");
const customerRouter = express.Router();
const customerController = require("../controllers/customerController");

////////////////////----- Route for customer -----////////////////////

customerRouter.route("/")
  .get(customerController.customerGet)
  .post(customerController.customerPost)
  .put(customerController.customerPut)
  .delete(customerController.customerDelete);

////////////////////----- Route for particular customer -----////////////////////

customerRouter.route("/:customerId")
  .get(customerController.particularCustGet)
  .post(customerController.particularCustPost)
  .put(customerController.particularCustPut)
  .delete(customerController.particularCustDelete);

////////////////////----- Export customer router -----////////////////////

module.exports = customerRouter;
