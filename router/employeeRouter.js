const express = require("express");
const employeeRouter = express.Router();
const employeeController = require("../controllers/employeeController");

////////////////////----- Route for employees -----////////////////////

employeeRouter.route("/")
  .get(employeeController.employeeGet)
  .post(employeeController.employeePost)
  .put(employeeController.employeePut)
  .delete(employeeController.employeeDelete);

////////////////////----- Route for particular employee  -----////////////////////

employeeRouter.route("/:employeeId")
  .get(employeeController.particularEmpGet)
  .post(employeeController.particularEmpPost)
  .put(employeeController.particularEmpPut)
  .delete(employeeController.particularEmpDelete);

////////////////////----- Export employee router  -----////////////////////

module.exports = employeeRouter;
