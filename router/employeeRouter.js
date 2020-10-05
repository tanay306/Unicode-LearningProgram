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
  uploadResumeGet,
  uploadResumePost,
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

////////////////////----- Route for particular employee remume upload  -----////////////////////

employeeRouter
  .route('/:employeeId/upload')
  .get(uploadResumeGet)
  .post(uploadResumePost);

////////////////////----- Export employee router  -----////////////////////

module.exports = employeeRouter;
