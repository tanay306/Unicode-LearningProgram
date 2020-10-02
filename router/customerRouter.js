const express = require('express');
const customerRouter = express.Router();
const {
  customerGet,
  customerPost,
  customerPut,
  customerDelete,
  particularCustGet,
  particularCustPost,
  particularCustPut,
  particularCustDelete,
} = require('../controllers/customerController');

////////////////////----- Route for customer -----////////////////////

customerRouter
  .route('/')
  .get(customerGet)
  .post(customerPost)
  .put(customerPut)
  .delete(customerDelete);

////////////////////----- Route for particular customer -----////////////////////

customerRouter
  .route('/:customerId')
  .get(particularCustGet)
  .post(particularCustPost)
  .put(particularCustPut)
  .delete(particularCustDelete);

////////////////////----- Export customer router -----////////////////////

module.exports = customerRouter;
