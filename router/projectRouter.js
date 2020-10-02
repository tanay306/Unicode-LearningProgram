const express = require('express');
const projectRouter = express.Router();
const {
  projectGet,
  projectPost,
  projectPut,
  projectDelete,
  particularProjectGet,
  particularProjectPost,
  particularProjectPut,
  particularProjectDelete,
} = require('../controllers/projectController');

////////////////////----- Route for projects -----////////////////////

projectRouter
  .route('/')
  .get(projectGet)
  .post(projectPost)
  .put(projectPut)
  .delete(projectDelete);

////////////////////----- Route for particular project  -----////////////////////

projectRouter
  .route('/:projectId')
  .get(particularProjectGet)
  .post(particularProjectPost)
  .put(particularProjectPut)
  .delete(particularProjectDelete);

////////////////////----- Export project router -----////////////////////

module.exports = projectRouter;
