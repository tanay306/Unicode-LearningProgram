const express = require("express");
const projectRouter = express.Router();
const projectController = require("../controllers/projectController");

////////////////////----- Route for projects -----////////////////////

projectRouter.route("/")
  .get(projectController.projectGet)
  .post(projectController.projectPost)
  .put(projectController.projectPut)
  .delete(projectController.projectDelete);

////////////////////----- Route for particular project  -----////////////////////

projectRouter.route("/:projectId")
  .get(projectController.particularProjectGet)
  .post(projectController.particularProjectPost)
  .put(projectController.particularProjectPut)
  .delete(projectController.particularProjectDelete);

module.exports = projectRouter;
