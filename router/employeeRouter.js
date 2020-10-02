const express = require('express');
const employeeRouter = express.Router();
const {
  employeeGet,
  employeePost,
  employeePut,
  employeeDelete,
  particularEmpGet,
  particularEmpPost,
  particularEmpPut,
  particularEmpDelete,
} = require('../controllers/employeeController');

////////////////////----- Route for employees -----////////////////////

employeeRouter
  .route('/')
  .get(employeeGet)
  .post(employeePost)
  .put(employeePut)
  .delete(employeeDelete);

////////////////////----- Route for particular employee  -----////////////////////

employeeRouter
  .route('/:employeeId')
  .get(particularEmpGet)
  .post(particularEmpPost)
  .put(particularEmpPut)
  .delete(particularEmpDelete);

////////////////////----- Export employee router  -----////////////////////

module.exports = employeeRouter;
